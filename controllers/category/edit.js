const Category = require("../../models/category");
const logger = require("../../logger");

const updates = async (req, res, next) => {
  if (!req.params.id) {
    return "Please provide id of the category to update";
  }

  if (!req.body.name || !req.file.path) {
    return "Please provide a name and image";
  }
  const { name } = req.body;

  const updateCategory = {
    name,
    image: req.file.path,
  };
  Category.findByIdAndUpdate(req.params.id, updateCategory, { new: true })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `CATEGORY UPDATED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, "edit category error");
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = updates;
