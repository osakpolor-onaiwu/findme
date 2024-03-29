const Category = require("../../models/category");
const logger = require("../../logger");

const deletes = async (req, res, next) => {
  Category.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `CATEGORY DELETED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, "delete category error");
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = deletes;
