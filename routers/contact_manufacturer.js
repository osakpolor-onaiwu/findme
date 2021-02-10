const express = require('express');
const router = express.Router();
const ContactManufacturer = require('../models/contactManufacturer');

router.post('/', (req, res) => {
  const { first_name, last_name, email, phone, message, location } = req.body;

  const newContact = new ContactManufacturer({
    first_name,
    last_name,
    email,
    phone,
    message,
    location,
    user,
  });

  newContact
    .save()
    .populate('user')
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

//gets all
router.get('/', (req, res) => {
  ContactManufacturer.find()
    .sort({ first_name: 1 })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(err));
});

//update
router.put('/:id', (req, res) => {
  const { first_name, last_name, email, phone, message, location } = req.body;
  const update = { first_name, last_name, email, phone, message, location };
  ContactManufacturer.findByIdAndUpdate(req.params.id, update, { new: true })
    .then((update) => {
      res.status(200).json(update);
    })
    .catch((err) =>
      res.status(400).json({
        msg: 'check if details are correct',
        err,
      }),
    );
});

//delete
router.delete('/:id', (req, res) => {
  ContactManufacturer.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
