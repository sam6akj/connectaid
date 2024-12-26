import express from "express";
import {addUser,getUserProfile,updateUserProfile,deleteUserProfile} from "../controllers/UserController.js";
import loginUser from "../controllers/LoginController.js";
import { getUserAppeals,createDonationAppeal,getUserContributions,makeDonation, getAllDonationAppeals } 
from "../controllers/DonationController.js";
import authenticateToken from "../middleware/authMiddleware.js";
import upload from "../middleware/fileUploadMiddileware.js";
import { getDonationAppeal } from "../controllers/DonationController.js";
import { getWalletBalance,addFunds,updateBalance } from "../controllers/PaymentController.js";


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
userRouter.put('/wallet/update',authenticateToken,updateBalance);


userRouter.get('/profile', authenticateToken, getUserProfile);
userRouter.put('/profile', authenticateToken, updateUserProfile);
userRouter.delete('/profile', authenticateToken, deleteUserProfile);

export default userRouter;