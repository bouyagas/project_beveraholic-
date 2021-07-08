const { validationResult } = require("express-validator");
const Beverage = require("./beverageModel");

exports.createBeverage = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    name,
    category_name,
    alcohol_content,
    ingredients,
    instruction,
  } = req.body;

  try {
    const newBeverage = new Beverage({
      name,
      category_name,
      alcohol_content,
      ingredients,
      instruction,
      user: req.user.id,
    });

    const beverage = await newBeverage.save();

    res.json(beverage);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.getAllBeveragesByCurrentUser = async (req, res) => {
  try {
    const beverages = await Beverage.find({ user: req.user.id })
      .sort({
        date: -1,
      })
      .populate("user", "username");

    res.json(beverages);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.getAllBeverages = async (req, res) => {
  try {
    console.log(req);
    const beverages = await Beverage.find()
      .sort({
        date: -1,
      })
      .populate("user", "username");

    res.json(beverages);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.getBeverageByID = async (req, res) => {
  try {
    const { id } = req.params;

    const beverage = await Beverage.findById(id).populate("user", "username");

    if (!beverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }

    res.json(beverage);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.updateBeverage = async (req, res) => {
  try {
    const beverage = await Beverage.findOneAndUpdate(
      { user: req.user.id },
      req.body,
      { new: true }
    );
    if (!beverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }

    if (beverage.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    res.json(beverage);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.deleteBeverage = async (req, res) => {
  try {
    const { id } = req.params;

    const beverage = await Beverage.findById(id);

    if (!beverage) {
      return res.status(404).json({ msg: "Beverage not found" });
    }

    if (beverage.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await beverage.remove();

    res.json({ msg: "Beverage remove" });
  } catch (error) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};
