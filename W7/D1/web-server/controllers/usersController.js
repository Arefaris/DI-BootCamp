const { users } = require("../models/usersModel.js");

/** (cru)D - Delete - DELETE - delete a user */

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to updtae not found" });
    return;
  }

  users.splice(index, 1);
  res.json(users);
};

/** (cr)U(d) - Update - PUT - update a user
 * id to update - params
 * name, email - to update = body
 */
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to updtae not found" });
    return;
  }

  users[index] = { ...users[index], name, email };

  res.json(users);
};

/** add user */
const addUser = (req, res) => {
  //   console.log(req.body);
  const { name, email } = req.body;

  try {
    const newUser = { name, email, id: users.length + 1 };
    users.push(newUser);
    res.json(users).status(201);
  } catch (error) {
    res.sendStatus(404);
  }
};

/** search users */
const searchUsers = (req, res) => {
  const { name } = req.query;

  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filteredUsers.length === 0) {
    res.json({ message: "no user match your search" }).status(404);
    return;
  }
  res.json(filteredUsers);
};

/** get one user */
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    // res.status(404).json({ message: "User not found" });
    res.sendStatus(404);
  }
  res.json(user);
};

/** get all users */
const getAllUsers = (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  searchUsers,
  addUser,
  updateUser,
  deleteUser
};
