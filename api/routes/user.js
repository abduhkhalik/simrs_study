const router = require("express").Router();
const userControllers = require("../controllers/userController");

// router.post("/", userControllers.createUser);

router.get("/", userControllers.getAllUsers);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

router.get("/:id", userControllers.getUserById);

module.exports = router;
