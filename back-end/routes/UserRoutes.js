import express from "express";
import addUser from "../controllers/UserController.js";
import loginUser from "../controllers/LoginController.js";

const userRouter = express.Router();

userRouter.post("/signup",addUser);
userRouter.post('/login', loginUser);

export default userRouter;