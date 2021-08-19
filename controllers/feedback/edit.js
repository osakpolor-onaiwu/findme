const feedbackS = require("../../models/feedback");

const updates = async (req, res) => {
  const { feedback_type, feedback } = req.body;

  const edit = {
    feedback_type,
    feedback,
  };

  feedbackS
    .findByIdAndUpdate(req.params.id, edit, { new: true })
    .then((data) => {
      res.status(200).json({
        status: "Success",
        message: `FEEDBACK UPDATED`,
        data,
      });
    })
    .catch((err) =>
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = updates;
