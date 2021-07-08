const { Router } = require("express");
const userRouter = Router();
const userController = require("./userControllers");
const { registerValidator, loginValidator } = require("../../validation/index");
const auth = require("../../config/auth");

//---------------------User routes------------------------
userRouter.get("/user", auth, userController.getUser);

userRouter.post(
  "/user/register",
  registerValidator(),
  userController.registerUser
);

userRouter.post("/user/login", loginValidator(), userController.loginUser);

module.exports = userRouter;
