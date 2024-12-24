import express from "express";
import addUser from "../controllers/UserController.js";
import loginUser from "../controllers/LoginController.js";
import { getUserAppeals,createDonationAppeal,getUserContributions,makeDonation, getAllDonationAppeals } 
from "../controllers/DonationController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import upload from "../middleware/fileUploadMiddileware.js";
import { getDonationAppeal } from "../controllers/DonationController.js";
import { getWalletBalance,addFunds } from "../controllers/PaymentController.js";


const userRouter = express.Router();

userRouter.post("/signup",addUser);
userRouter.post('/login', loginUser);

userRouter.post('/donation-appeals',authenticateToken,upload.single('image'),createDonationAppeal);
userRouter.get('/my-appeals', authenticateToken, getUserAppeals);
userRouter.get('/my-contributions', authenticateToken, getUserContributions);
userRouter.post('/donate', authenticateToken, makeDonation);
userRouter.get('/donation-appeals/all',getAllDonationAppeals);
userRouter.get('/donation-appeals/:id', getDonationAppeal);

userRouter.get('/wallet', authenticateToken, getWalletBalance);
userRouter.post('/wallet/add', authenticateToken, addFunds);

export default userRouter;