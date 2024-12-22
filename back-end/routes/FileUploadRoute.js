import express from 'express';
import authenticateToken from '../middleware/authMiddleware.js';
import { createDonationAppeal } from '../controllers/DonationController.js';
import upload from '../middleware/fileUploadMiddileware.js';

const fileRouter = express.Router();

fileRouter.post('/donation-appeals',authenticateToken,upload.single('image'),createDonationAppeal);

export default fileRouter;