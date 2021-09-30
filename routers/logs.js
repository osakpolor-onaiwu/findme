const express = require("express");
const router = express.Router();
const Logs = require("../handlers/logs");

//gets all
router.get("/", Logs.read);

module.exports = router;
