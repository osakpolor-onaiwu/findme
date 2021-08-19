const express = require("express");
const router = express.Router();
const faqController = require("../handlers/faq/index");

router.post("/", faqController.create);

//gets all
router.get("/", faqController.read);

//update
router.put("/:id", faqController.update);

//delete
router.delete("/:id", faqController.deletes);

module.exports = router;
