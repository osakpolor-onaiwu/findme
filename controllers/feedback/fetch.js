const feedback = require("../../models/feedback");
const logger = require("../../logger");

const fetch = async (req, res, next) => {
  await feedback
    .find()
    .sort({ ts: 1 })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FEEDBACK FETCHED`,
        data,
      })
    )
    .catch((err) => {
      logger.errors(err, "fetch feedback error");
      res.status(404).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = fetch;
