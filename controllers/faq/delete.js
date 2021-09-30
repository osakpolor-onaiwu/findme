const Faq = require("../../models/FAQ");
const logger = require("../../logger");

const deletes = async (req, res, next) => {
  await Faq.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FAQ DELETED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, "delete faq error");
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = deletes;
