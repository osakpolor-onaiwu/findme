const Samples = require('../models/samples');

const SampleController = {
  create(req, res, next) {
    const newSample = new Samples({
      name: req.body.name,
      image: req.file.path,
      manufacturer: req.body.manufacturer,
    });

    newSample
      .save()
      .then((sample) => res.status(200).json(sample))
      .catch((err) => res.status(400).json(err));
  },

  read(req, res) {
    Samples.find()
      .populate('manufacturer')
      .then((sample) => {
        //we should change the localhost:5000 to where we host it to
        //I had to do this because the image was not showing
        const modifiedSample = sample.map((item) => {
          item.image = `http://localhost:5000/${item.image}`;
          return item;
        });

        return res.status(200).json(modifiedSample);
      })
      .catch((err) => res.status(400).json(err));
  },

  update(req, res, next) {
    const { name, image, manufacturer } = req.body;
    const update = {
      name,
      image: req.file.path,
      manufacturer,
    };
    Samples.findByIdAndUpdate(req.params.id, update, { new: true })
      .then((sample) => res.status(200).json(sample))
      .catch((err) => res.status(400).json(err));
  },

  delete(req, res, next) {
    Samples.findByIdAndDelete(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = SampleController;
