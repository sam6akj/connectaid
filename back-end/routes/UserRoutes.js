import express from "express";
import addUser from "../controllers/UserController.js";
import loginUser from "../controllers/LoginController.js";
import { getUserAppeals,createDonationAppeal,getUserContributions,makeDonation } 
from "../controllers/DonationController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/signup",addUser);
userRouter.post('/login', loginUser);

userRouter.post('/donation-appeals', authenticateToken, createDonationAppeal);
userRouter.get('/my-appeals', authenticateToken, getUserAppeals);
userRouter.get('/my-contributions', authenticateToken, getUserContributions);
userRouter.post('/donate', authenticateToken, makeDonation);


export default userRouter;