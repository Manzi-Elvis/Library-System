const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = async (req, res, next) => {
try {
const authHeader = req.headers.authorization;
if (!authHeader) return res.status(401).json({ message: 'No token' });
const token = authHeader.split(' ')[1];
const payload = jwt.verify(token, process.env.JWT_SECRET);
const user = await User.findById(payload.id).select('-password');
if (!user) return res.status(401).json({ message: 'User not found' });
req.user = user;
next();
} catch (err) {
return res.status(401).json({ message: 'Invalid token' });
}
};
const adminOnly = (req, res, next) => {
if (!req.user || req.user.role !== 'admin') return res.status(403).json({
message: 'Admins only' });
next();
};
module.exports = { auth, adminOnly };