const User = require('../../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ 
      success: true,  
      token,
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (err) {
    next(err);
  }
}; 