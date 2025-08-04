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

module.exports = {
	users,
	findUserByEmail,
	findUserByUsername,
	findUserById,
	createUser
};