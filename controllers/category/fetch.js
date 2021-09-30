const Category = require("../../models/category");
const logger = require("../../logger");

const fetch = async (req, res, next) => {
  await Category.find()
    .select("-manufacturer")
    .sort({ name: 1 })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `CATEGORY FETCHED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, "fetch category error");
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = fetch;
