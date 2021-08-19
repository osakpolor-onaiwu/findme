const Faq = require("../../models/FAQ");

const create = async (req, res, next) => {
  const body = req.body;

  const faq = await Faq.findOne(
    {
      question: body.question,
    },
    null,
    { lean: true }
  );

  if (faq) {
    return res.status(400).json({
      message: "question already exist",
    });
  }

  const newFaq = new Faq(body);

  newFaq
    .save()
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FAQ CREATED`,
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
