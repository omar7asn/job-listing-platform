// Admin-specific routes for user and job management
const express = require('express');
const User = require('../models/User');
const { authenticate, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all users (admin only)
router.get('/users', authenticate, authorizeAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
