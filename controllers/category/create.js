const Category = require("../../models/category");
const logger = require("../../logger");

const create = (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    image: req.file.path,
  });

  newCategory
    .save()
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `CATEGORY CREATED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, " create category error");
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = create;
