var express = require("express");
var router = express.Router();

const userController = require("../controllers/userController");

router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.post("/", userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
