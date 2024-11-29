const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const users = await User.find({}, '-password');
    res.json(users);
};
