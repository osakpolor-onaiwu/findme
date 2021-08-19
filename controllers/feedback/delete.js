const feedback = require("../../models/feedback");

const deletes = async (req, res, next) => {
  await feedback
    .findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FEEDBACK DELETED`,
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
