const manufacturer = require("../../models/manufacturer");

const deletes = async (req, res, next) => {
  manufacturer
    .findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `MANUFACTURERS DELETED`,
        data,
      })
    )
    .catch((err) =>
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = deletes;
