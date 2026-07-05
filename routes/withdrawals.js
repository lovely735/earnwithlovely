const express = require('express');
const Withdrawal = require('../models/Withdrawal');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/request', protect, async (req, res) => {
  try {
    const { accountTitle, easypaisa, jazzcash, amount } = req.body;

    if (!accountTitle || !amount) {
      return res.status(400).json({ message: 'Account title and amount required' });
    }

    if (!easypaisa && !jazzcash) {
      return res.status(400).json({ message: 'Easypaisa or JazzCash required' });
    }

    if (amount > req.user.availableBalance) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    const withdrawal = new Withdrawal({
      user: req.user._id,
      accountTitle,
      easypaisa,
      jazzcash,
      amount
    });

    await withdrawal.save();
    res.status(201).json({ message: 'Withdrawal request submitted', withdrawal });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/', protect, async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(withdrawals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;