const { Router } = require("express");
const beverageRouter = Router();
const beveragesController = require("./beverageControllers");
const { beverageValidator } = require("../../validation/index");
const auth = require("../../config/auth");
//---------------------Beverage routes------------------------
beverageRouter.post(
  "/beverages",
  auth,
  beverageValidator(),
  beveragesController.createBeverage
);

beverageRouter.get(
  "/:user_id/beverages",
  auth,
  beveragesController.getAllBeveragesByCurrentUser
);

beverageRouter.get("/beverages", auth, beveragesController.getAllBeverages);

beverageRouter.get("/beverages/:id", auth, beveragesController.getBeverageByID);

beverageRouter.put("/beverages/:id", auth, beveragesController.updateBeverage);

beverageRouter.delete(
  "/beverages/:id",
  auth,
  beveragesController.deleteBeverage
);

module.exports = beverageRouter;
