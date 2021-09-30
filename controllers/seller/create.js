const seller = require("../../models/seller");

const create = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      companyName,
      state,
      companyLocation,
      email,
      phone,
      landmark,
      description,
      long,
      lat,
    } = req.body;

    const newSeller = new seller({
      first_name,
      last_name,
      companyName,
      state,
      companyLocation,
      email,
      phone,
      landmark,
      description,
      long,
      lat,
    });

    const existing = await seller.findOne({
      companyName: companyName,
    });

    if (existing) {
      throw new Error("Seller already exists");
    }

    await newSeller.save().then((data) => {
      console.log(data);
      res.status(200).json({
        status: "Success",
        message: `SELLER CREATED`,
        data: data,
      });
    });
  } catch (err) {
    if (err.message.includes("Seller validation failed")) {
      return res.status(400).json({
        status: "error",
        message: `An error occured`,
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
