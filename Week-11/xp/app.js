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