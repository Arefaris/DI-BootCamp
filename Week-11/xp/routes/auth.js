const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, findUserByUsername, createUser } = require('../data/users');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key-change-in-production';
const ACCESS_TOKEN_EXPIRY = '1h';
const REFRESH_TOKEN_EXPIRY = '7d';

const generateTokens = (userId) => {
	const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
	const refreshToken = jwt.sign({ userId }, JWT_REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
	return { accessToken, refreshToken };
};

router.post('/register', async (req, res) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res.status(400).json({ 
				success: false, 
				message: 'Username, email, and password are required' 
			});
		}

		if (password.length < 6) {
			return res.status(400).json({ 
				success: false, 
				message: 'Password must be at least 6 characters long' 
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ 
				success: false, 
				message: 'Please provide a valid email address' 
			});
		}

		if (findUserByEmail(email)) {
			return res.status(409).json({ 
				success: false, 
				message: 'User with this email already exists' 
			});
		}

		if (findUserByUsername(username)) {
			return res.status(409).json({ 
				success: false, 
				message: 'Username already taken' 
			});
		}

		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = createUser({
			username,
			email,
			password: hashedPassword
		});

		const { accessToken, refreshToken } = generateTokens(newUser.id);

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 7 * 24 * 60 * 60 * 1000
		});

		const { password: _, ...userWithoutPassword } = newUser;

		res.status(201).json({
			success: true,
			message: 'User registered successfully',
			user: userWithoutPassword,
			accessToken
		});

	} catch (error) {
		console.error('Registration error:', error);
		res.status(500).json({ 
			success: false, 
			message: 'Internal server error' 
		});
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ 
				success: false, 
				message: 'Email and password are required' 
			});
		}

		const user = findUserByEmail(email);
		if (!user) {
			return res.status(401).json({ 
				success: false, 
				message: 'Invalid email or password' 
			});
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ 
				success: false, 
				message: 'Invalid email or password' 
			});
		}

		const { accessToken, refreshToken } = generateTokens(user.id);

		res.cookie('refreshToken', refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 7 * 24 * 60 * 60 * 1000
		});

		const { password: _, ...userWithoutPassword } = user;

		res.json({
			success: true,
			message: 'Login successful',
			user: userWithoutPassword,
			accessToken
		});

	} catch (error) {
		console.error('Login error:', error);
		res.status(500).json({ 
			success: false, 
			message: 'Internal server error' 
		});
	}
});

router.post('/refresh', (req, res) => {
	try {
		const { refreshToken } = req.cookies;

		if (!refreshToken) {
			return res.status(401).json({ 
				success: false, 
				message: 'Refresh token not found' 
			});
		}

		jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, decoded) => {
			if (err) {
				return res.status(403).json({ 
					success: false, 
					message: 'Invalid refresh token' 
				});
			}

			const { accessToken, refreshToken: newRefreshToken } = generateTokens(decoded.userId);

			res.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'strict',
				maxAge: 7 * 24 * 60 * 60 * 1000
			});

			res.json({
				success: true,
				accessToken
			});
		});

	} catch (error) {
		console.error('Token refresh error:', error);
		res.status(500).json({ 
			success: false, 
			message: 'Internal server error' 
		});
	}
});

router.post('/logout', (req, res) => {
	res.clearCookie('refreshToken');
	res.json({
		success: true,
		message: 'Logged out successfully'
	});
});

module.exports = router;