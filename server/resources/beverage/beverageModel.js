//--- Beverage Schema to post users' name and password to database ---

const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const BeverageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
    },

    category_name: {
      type: String,
      required: true,
    },

    alcohol_content: {
      type: String,
      required: true,
    },

    ingredients: {
      type: String,
      required: true,
    },

    instruction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Beverage = mongoose.model("beverages", BeverageSchema);
