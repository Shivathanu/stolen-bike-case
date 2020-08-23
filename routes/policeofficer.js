const express = require("express");
const router = express.Router();
const { create } = require("../controllers/policeofficer");
 
router.post("/policeofficer/create", create);

module.exports = router;
