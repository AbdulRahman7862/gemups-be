exports.getUserBalance = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(404).json({ success: false, message: 'Could not fetch balance' });
    }
    return res.status(200).json({ success: true, balance: req.user.walletBalance });
  } catch (err) {
    next(err);
  }
}; 