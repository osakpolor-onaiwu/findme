const manufactuer = require("../../models/manufacturer");
const categories = require("../../models/category");
const create = async (req, res, next) => {
  try {
    const {
      fullname,
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

    const newManufacturer = new manufactuer({
      fullname,
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

    const existing = await manufactuer.findOne({
      companyName: companyName,
    });

    if (existing) {
      throw new Error("Manufacturer already exists");
    }

    await newManufacturer.save().then((data) => {
      res.status(200).json({
        status: "Success",
        message: `MANUFACTURERS CREATED`,
        data: data,
      });
    });
  } catch (err) {
    if (err.message.includes("Manufacturer validation failed")) {
      return res.status(400).json({
        status: "error",
        message: `Category not found`,
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
