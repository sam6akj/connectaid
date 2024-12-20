import bcrypt from 'bcryptjs';
import User from "../models/User.js";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const { firstName, lastName, dateOfBirth } = user;
      res.status(200).json({
        message: 'Login successful',
        user: { firstName, lastName, email, dateOfBirth },
      });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ message: `Server Error: ${err.message}` });
    }
  };
  
  export default loginUser;