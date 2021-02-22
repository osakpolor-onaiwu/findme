const Manufacturer = require('../models/manufacturer');

const manufacturerController = {
  readAll(req, res) {
    Manufacturer.find()
      .populate('category')
      .select('-phone -sample ')
      .sort({ name: 1 })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(404).json(err));
  },

  create(req, res) {
    const {
      name,
      companyName,
      city,
      state,
      address,
      email,
      phone,
      sample,
      category,
      description,
      long,
      lat,
    } = req.body;

    const newManufacturer = new Manufacturer({
      name,
      companyName,
      city,
      state,
      address,
      email,
      phone,
      sample,
      category,
      description,
      long,
      lat,
    });

    newManufacturer
      .save()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  },
  update(req, res) {
    const {
      name,
      companyName,
      city,
      state,
      email,
      phone,
      category,
      description,
      long,
      lat,
    } = req.body;

    const update = {
      name,
      companyName,
      city,
      state,
      email,
      phone,
      category,
      description,
      long,
      lat,
    };
    Manufacturer.findByIdAndUpdate(req.params.id, update, { new: true })
      .then((update) => {
        res.status(200).json(update);
      })
      .catch((err) =>
        res.status(400).json({
          msg: 'check if details are correct',
          err,
        }),
      );
  },

  delete(req, res) {
    Manufacturer.findByIdAndDelete(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = manufacturerController;
