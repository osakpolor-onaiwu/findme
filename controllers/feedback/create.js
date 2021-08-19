const feedback = require("../../models/feedback");

const create = async (req, res, next) => {
  const body = req.body;

  if (!body.feedBackType) {
    return `feed back type is required`;
  }

  if (!body.feedback) {
    return `feedback is required`;
  }

  const feed = await new feedback(body);

  feed
    .save()
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FEEDBACK CREATED`,
        data,
      })
    )
    .catch((err) => {
      return res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      });
    });
};

module.exports = create;
