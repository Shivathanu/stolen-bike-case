const express = require("express");
const router = express.Router();
const { createUser, createAdmin } = require("../controllers/user");
 
router.post("/user/createUser", createUser);
router.post("/user/createAdmin", createAdmin);

module.exports = router;
