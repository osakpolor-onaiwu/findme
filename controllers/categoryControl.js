const Category = require('../models/category');

const categorycontroller = {
  create(req, res) {
    const newCategory = new Category({
      name: req.body.name,
      image: req.file.path,
    });

    newCategory
      .save()
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },

  readAll(req, res) {
    Category.find()
      .select('-manufacturer')
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },

  update(req, res) {
    const { name } = req.body;
    const updateCategory = {
      name,
      image: req.file.path,
    };
    Category.findByIdAndUpdate(req.params.id, updateCategory, { new: true })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },

  delete(req, res) {
    Category.findByIdAndDelete(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = categorycontroller;
