const jwt = require('jsonwebtoken');
const { findUserById } = require('../data/users');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.status(401).json({ 
			success: false, 
			message: 'Access token required' 
		});
	}

	jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			if (err.name === 'TokenExpiredError') {
				return res.status(401).json({ 
					success: false, 
					message: 'Access token expired' 
				});
			} else if (err.name === 'JsonWebTokenError') {
				return res.status(403).json({ 
					success: false, 
					message: 'Invalid access token' 
				});
			} else {
				return res.status(403).json({ 
					success: false, 
					message: 'Token verification failed' 
				});
			}
		}

		const user = findUserById(decoded.userId);
		if (!user) {
			return res.status(401).json({ 
				success: false, 
				message: 'User not found' 
			});
		}

		const { password, ...userWithoutPassword } = user;
		req.user = userWithoutPassword;
		next();
	});
};

const optionalAuth = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		req.user = null;
		return next();
	}

	jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			req.user = null;
		} else {
			const user = findUserById(decoded.userId);
			if (user) {
				const { password, ...userWithoutPassword } = user;
				req.user = userWithoutPassword;
			} else {
				req.user = null;
			}
		}
		next();
	});
};

module.exports = {
	authenticateToken,
	optionalAuth
};