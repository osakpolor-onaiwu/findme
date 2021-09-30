const Samples = require("../../models/samples");

const create = async (req, res, next) => {
  try {
    const { name, manufacturer } = req.body;
    const newSample = new Samples({
      name,
      image: req.file.path,
      manufacturer,
    });

    await newSample.save().then((data) => {
      res.status(200).json({
        status: "Success",
        message: `SAMPLE CREATED`,
        data,
      });
    });
  } catch (err) {
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
  }
};

module.exports = create;
