const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', authenticateToken, (req, res) => {
	res.json({
		success: true,
		message: 'Protected profile data',
		user: req.user
	});
});

router.get('/dashboard', authenticateToken, (req, res) => {
	res.json({
		success: true,
		message: `Welcome to your dashboard, ${req.user.username}!`,
		user: req.user,
		data: {
			lastLogin: new Date().toISOString(),
			notifications: 3,
			messages: 7
		}
	});
});

router.post('/settings', authenticateToken, (req, res) => {
	res.json({
		success: true,
		message: 'Settings updated successfully',
		user: req.user,
		updatedSettings: req.body
	});
});

router.get('/admin', authenticateToken, (req, res) => {
	if (req.user.email !== 'john@example.com') {
		return res.status(403).json({
			success: false,
			message: 'Admin access required'
		});
	}

	res.json({
		success: true,
		message: 'Admin area accessed',
		adminData: {
			totalUsers: 2,
			serverStatus: 'healthy',
			lastBackup: new Date().toISOString()
		}
	});
});

module.exports = router;