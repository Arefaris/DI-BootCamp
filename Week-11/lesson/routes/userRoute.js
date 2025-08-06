const {Router} = require("express")
const userController = require("../controllers/userController.js")
const {verifyToken} = require("../middlewares/verifyToken.js")
const router = Router()

router.get("/all", verifyToken, userController.getAllusers)
router.get("/auth", verifyToken, userController.verifyAuth)
router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.post("/logout", userController.logOutUser)

module.exports = router