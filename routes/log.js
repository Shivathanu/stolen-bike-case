const express = require("express");
const router = express.Router();
const { create, getByQuery } = require("../controllers/log");
 
router.get("/log", getByQuery);
router.post("/log/create", create);

module.exports = router;
