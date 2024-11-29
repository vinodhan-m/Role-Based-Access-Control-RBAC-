const { verifyToken } = require('../utils/jwtUtils');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        req.user = verifyToken(token);
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};
