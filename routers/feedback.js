const express = require("express");
const router = express.Router();
const feedback = require("../handlers/feedback/index");

router.post("/", feedback.create);

//gets all
router.get("/", feedback.read);

//update
router.put("/:id", feedback.update);

//delete
router.delete("/:id", feedback.deletes);

module.exports = router;
