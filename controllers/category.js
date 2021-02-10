const Category = require('../models/category');
const path = require('path');

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

const categorycontroller = {
  readAll(req, res) {
    Category.find()
      .select('-manufacturer')
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },
  create(req, res) {},
  update(req, res) {},
  delete(req, res) {},
};

module.exports = categorycontroller;
