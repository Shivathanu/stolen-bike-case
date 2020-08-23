const express = require("express");
const router = express.Router();
const { create } = require("../controllers/reporter");
 
router.post("/reporter/create", create);

module.exports = router;
