const manufacturer = require("../../models/manufacturer");

const updates = async (req, res, next) => {
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

  const edit = {
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

  manufacturer
    .findByIdAndUpdate(req.params.id, edit, { new: true })
    .then((data) => {
      res.status(200).json({
        status: "Success",
        message: `MANUFACTURERS UPDATED`,
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
