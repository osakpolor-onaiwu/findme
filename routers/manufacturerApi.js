const express = require("express");
const router = express.Router();
const manufacturer = require("../handlers/manufactuer/index");

router.post("/", manufacturer.create);

//gets all
router.get("/", manufacturer.read);

//update
router.put("/:id", manufacturer.update);

//delete
router.delete("/:id", manufacturer.deletes);

module.exports = router;
