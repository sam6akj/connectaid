import Wallet from "../models/Wallet.js";

export const getWalletBalance = async (req, res) => {
    try {
      let wallet = await Wallet.findOne({ user: req.user.userId });
      if (!wallet) {
        wallet = await Wallet.create({ user: req.user.userId });
      }
      res.json({ balance: wallet.balance });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  
export const addFunds = async (req, res) => {
    try {
      const { amount } = req.body;
      let wallet = await Wallet.findOne({ user: req.user.userId });
      
      if (!wallet) {
        wallet = await Wallet.create({ 
          user: req.user.userId,
          balance: amount 
        });
      } else {
        wallet.balance += Number(amount);
        await wallet.save();
      }
      
      res.json({ balance: wallet.balance });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};