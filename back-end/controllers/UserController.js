import bcrypt from 'bcryptjs';
import User from "../models/User.js";

const addUser = async (req, res) => {
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
      dateOfBirth
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: `Server Error: ${err.message}` });
  }
};


export default addUser;