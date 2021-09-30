const seller = require("../../models/seller");

const updates = async (req, res, next) => {
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

  const edit = {
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
  };

  seller
    .findByIdAndUpdate(req.params.id, edit, { new: true })
    .then((data) => {
      res.status(200).json({
        status: "Success",
        message: `SELLER UPDATED`,
        data,
      });
    })
    .catch((err) =>
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = updates;
