const Faq = require("../../models/FAQ");

const deletes = async (req, res, next) => {
  await Faq.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FAQ DELETED`,
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
