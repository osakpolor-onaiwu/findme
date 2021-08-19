const Samples = require("../../models/samples");

const create = (req, res, next) => {
  const newSample = new Samples({
    name: req.body.name,
    image: req.file.path,
    manufacturer: req.body.manufacturer,
  });

  newSample
    .save()
    .then((data) => {
      res.status(200).json({
        status: "Success",
        message: `SAMPLE CREATED`,
        data,
      });
    })
    .catch((err) => {
      if (err.message.includes("Samples validation failed")) {
        return res.status(400).json({
          status: "error",
          message: `Manufacturer not found`,
          data: null,
        });
      }
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = create;
