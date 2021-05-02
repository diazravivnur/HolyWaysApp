const express = require("express");
const router = express.Router();
const { createUser, updateUser } = require("../controllers/users");
const {
  registration,
  login,
  getUsers,
  deleteUser,
} = require("../controllers/auth");

//Router Users

router.post("/user", createUser);
router.patch("/user/:id", updateUser);

//Router Auth
router.post("/register", registration);
router.post("/login", login);
router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

module.exports = router;
