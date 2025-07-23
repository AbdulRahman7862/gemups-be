const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApiError = require('../utils/apiError');

// Authenticate JWT
exports.authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new ApiError(401, 'No token provided'));
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return next(new ApiError(401, 'User not found'));
    }
    next();
  } catch (err) {
    next(new ApiError(401, 'Invalid or expired token'));
  }
};

// Require admin role
exports.requireAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return next(new ApiError(403, 'Admin access required'));
  }
  next();
}; 