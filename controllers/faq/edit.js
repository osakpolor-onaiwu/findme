const Faq = require("../../models/FAQ");

const update = (req, res, next) => {
  const { question, answer } = req.body;
  const updatefaq = {
    question,
    answer,
  };
  Faq.findByIdAndUpdate(req.params.id, updatefaq, { new: true })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FAQ UPDATED`,
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

module.exports = update;
