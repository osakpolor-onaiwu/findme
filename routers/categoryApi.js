const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/categoryControl');
//imports multer
const multer = require('multer');

//defines how files should be stored
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  //sets that the file should be stored with its extension name
  filename: function (req, file, callback) {
    console.log(file);
    callback(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
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

const Category = require('../models/category');

router.post('/', upload.single('image'), controller.create);

router.get('/', controller.readAll);

router.put('/:id', upload.single('image'), controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
