const express = require("express");
const router = express.Router();
const path = require("path");
const category = require("../handlers/categories/index");
//imports multer
const multer = require("multer");

//defines how files should be stored
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  //sets that the file should be stored with its extension name
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2.5,
  },
  fileFilter: fileFilter,
});

router.post("/", upload.single("image"), category.create);

router.get("/", category.read);

router.put("/:id", upload.single("image"), category.update);

router.delete("/:id", category.deletes);

module.exports = router;
