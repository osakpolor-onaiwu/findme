const Samples = require("../../models/samples");

const deletes = (req, res, next) => {
  Samples.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `SAMPLE DELETED`,
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
