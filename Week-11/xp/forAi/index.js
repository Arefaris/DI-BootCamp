// data/users.js
const users = [
	{
		id: 1,
		username: 'john_doe',
		email: 'john@example.com',
		password: '$2b$10$8Xz5Q1pE7kI9mGwRqU4tJOzF3vGkL2wN6sA9cVxE8mP1qR7uT3yK0'
	},
	{
		id: 2,
		username: 'jane_smith',
		email: 'jane@example.com',
		password: '$2b$10$9Yz6R2qF8lJ0nHxSrV5uKPzG4wHlM3xO7tB0dWyF9nQ2rS8vU4zL1'
	}
];

let nextId = 3;

const findUserByEmail = (email) => {
	return users.find(user => user.email === email);
};

const findUserByUsername = (username) => {
	return users.find(user => user.username === username);
};

const findUserById = (id) => {
	return users.find(user => user.id === id);
};

const createUser = (userData) => {
	const newUser = {
		id: nextId++,
		...userData
	};
	users.push(newUser);
	return newUser;
};

// routes/auth.js
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

// middleware/auth.js
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

// routes/protected.js
const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const protectedRouter = express.Router();

protectedRouter.get('/profile', authenticateToken, (req, res) => {
	res.json({
		success: true,
		message: 'Protected profile data',
		user: req.user
	});
});

protectedRouter.get('/dashboard', authenticateToken, (req, res) => {
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

protectedRouter.post('/settings', authenticateToken, (req, res) => {
	res.json({
		success: true,
		message: 'Settings updated successfully',
		user: req.user,
		updatedSettings: req.body
	});
});

protectedRouter.get('/admin', authenticateToken, (req, res) => {
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

// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'JWT Authentication API is running',
		endpoints: {
			auth: {
				register: 'POST /auth/register',
				login: 'POST /auth/login',
				refresh: 'POST /auth/refresh',
				logout: 'POST /auth/logout'
			},
			protected: {
				profile: 'GET /protected/profile',
				dashboard: 'GET /protected/dashboard',
				settings: 'POST /protected/settings',
				admin: 'GET /protected/admin'
			}
		}
	});
});

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.use('*', (req, res) => {
	res.status(404).json({
		success: false,
		message: 'Route not found'
	});
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		success: false,
		message: 'Something went wrong!'
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Visit http://localhost:${PORT} to see available endpoints`);
});

module.exports = app;