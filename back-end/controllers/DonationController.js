import User from "../models/User.js";
import Donation from "../models/Donation.js";
import DonationAppeal from "../models/DonationAppeal.js";

export const createDonationAppeal = async (req, res) => {
  try {
    const { title, description, category, goal } = req.body;
    const userId = req.user.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: No user found in token' });
    }
    
    const validationErrors = [];
    if (!title?.trim()) validationErrors.push('Title is required');
    if (!description?.trim()) validationErrors.push('Description is required');
    if (!category?.trim()) validationErrors.push('Category is required');
    if (!goal || isNaN(Number(goal)) || Number(goal) <= 0) {
      validationErrors.push('Valid goal amount is required');
    }

    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        message: validationErrors.join(', ')
      });
    }

    const appeal = new DonationAppeal({
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      goal: Number(goal),
      image: req.file ? req.file.path : null,
      creator: userId
    });

    await appeal.save();

    await User.findByIdAndUpdate(userId, {
      $push: { donationAppeals: appeal._id }
    });

    res.status(201).json({ 
      message: 'Donation appeal created successfully', 
      appeal 
    });
  } catch (error) {
    console.error('Error creating donation appeal:', error);
    res.status(500).json({ 
      message: 'Failed to create donation appeal. Please try again.' 
    });
  }
};

export const getUserAppeals = async (req, res) => {
  try {
    const appeals = await DonationAppeal.find({ creator: req.user.userId })
      .sort({ createdAt: -1 });
    
    res.json(appeals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getUserContributions = async (req, res) => {
  try {
    const donations = await Donation.find({ donor: req.user.userId })
      .populate('donationAppeal')
      .sort({ createdAt: -1 });
    
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const makeDonation = async (req, res) => {
  try {
    const { appealId, amount, message } = req.body;
    const userId = req.user.userId;

    const donation = new Donation({
      amount,
      message,
      donationAppeal: appealId,
      donor: userId
    });

    await donation.save();

    // Update appeal's raised amount
    await DonationAppeal.findByIdAndUpdate(appealId, {
      $inc: { raised: amount },
      $push: { donations: donation._id }
    });

    // Add to user's donations
    await User.findByIdAndUpdate(userId, {
      $push: { donationsMade: donation._id }
    });

    res.status(201).json({ message: 'Donation successful', donation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};