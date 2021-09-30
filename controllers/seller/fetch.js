const seller = require("../../models/seller");

const fetch = async (req, res, next) => {
  await seller
    .find()
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `SELLER FETCHED`,
        data,
      })
    )
    .catch((err) =>
      res.status(404).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = fetch;
