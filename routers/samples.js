const express = require('express');
const router = express.Router();
const SampleController = require('../controllers/sampleController');
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

router.post('/', upload.single('image'), SampleController.create);

router.get('/', SampleController.read);

router.put('/:id', SampleController.update);

router.delete('/:id', SampleController.delete);

module.exports = router;
