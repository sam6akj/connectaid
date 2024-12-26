import bcrypt from 'bcryptjs';
import User from "../models/User.js";
import mongoose from 'mongoose';

export const addUser = async (req, res) => {
  const { firstName, lastName, email, password, dateOfBirth } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dateOfBirth,
      donationsMade: [],
      donationAppeals: []
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: `Server Error: ${err.message}` });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('-email');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, password, dateOfBirth } = req.body;

    const isMatch = await bcrypt.compare(password, req.user.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { firstName, lastName, password:hashedPassword, dateOfBirth },
      { new: true }
    ).select('-email');

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    // Start a transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Get user's donation appeals
      const user = await User.findById(req.user.userId);
      
      // Cancel all active donation appeals
      await DonationAppeal.updateMany(
        { _id: { $in: user.donationAppeals } },
        { status: 'cancelled' }
      );

      // Delete user
      await User.findByIdAndDelete(req.user.userId);

      await session.commitTransaction();
      res.json({ message: 'Account deleted successfully' });
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};