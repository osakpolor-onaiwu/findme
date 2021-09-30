const express = require("express");
const router = express.Router();
const seller = require("../handlers/seller/index");

router.post("/", seller.create);

//gets all
router.get("/", seller.read);

//update
router.put("/:id", seller.update);

//delete
router.delete("/:id", seller.deletes);

module.exports = router;
