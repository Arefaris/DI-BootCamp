const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  searchUsers,
  addUser,
  updateUser,
  deleteUser
} = require("../controllers/usersController.js");

const router = Router();

router.delete('/:id',deleteUser)
/** (cr)U(d) - Update - PUT - update a user */
router.put('/:id', updateUser)
/** C(rud) - Create - POST - add a user */
router.post("/", addUser);
/** (c)R(ud) - Read - GET - search users */
router.get("/search", searchUsers);
/** (c)R(ud) - Read - GET - get one user */
router.get("/:id", getUserById);
/** (c)R(ud) - Read - GET - get all users */
router.get("/", getAllUsers);

module.exports = router;
