import express from "express";
import createUser from "../../controllers/userControllers/createUserController.js";
import loginUser from "../../controllers/userControllers/loginUserController.js";

const userRouter = express.Router();

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);

export default userRouter;