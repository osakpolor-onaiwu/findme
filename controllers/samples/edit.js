const Samples = require("../../models/samples");

const update = (req, res, next) => {
  const { name, manufacturer } = req.body;
  const updates = {
    name,
    image: req.file.path,
    manufacturer,
  };
  Samples.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `SAMPLE UPDATED`,
        data,
      })
    )
    .catch((err) =>
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = update;
