const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './samples');
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
  fileFilter,
});
Samples = require('../models/samples');

router.post('/', upload.single('image'), (req, res) => {
  const { description, manufacturer } = req.body;

  const newSample = new Samples({
    description,
    image: req.file.path,
    manufacturer,
  });

  newSample
    .save()
    .then((sample) => res.status(200).json(sample))
    .catch((err) => res.status(400).json(err));
});

router.get('/', (req, res) => {
  Samples.find()
    .populate('manufacturer')
    .then((sample) => res.status(200).json(sample))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', upload.single('image'), (req, res) => {
  const { description, manufacturer } = req.body;
  const update = {
    description,
    image: req.file.path,
    manufacturer,
  };
  Samples.findByIdAndUpdate(req.params.id, update, { new: true })
    .then((sample) => res.status(200).json(sample))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Samples.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
