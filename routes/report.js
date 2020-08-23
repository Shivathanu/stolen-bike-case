const express = require("express");
const router = express.Router();
const { create } = require("../controllers/report");
 
router.post("/report/create", create);

module.exports = router;
