const faq_model = require("../../models/FAQ");
const validatorSpec = require("../../utils/specvalidator");
const joi = require("joi");

const faqController = {
  async create(req, res, next) {
    const data = req.body;

    const faq = await faq_model.findOne(
      {
        question: data.question,
      },
      null,
      { lean: true }
    );

    if (faq) {
      return res.status(400).json({
        message: "question already exist",
      });
    }

    const newFaq = new faq_model(data);

    newFaq
      .save()
      .then((item) => res.status(200).json(item))
      .catch((err) => {
        return res.status(400).json(err.message);
      });
  },

  //get all
  readAll(req, res, next) {
    faq_model
      .find()
      .then((item) => res.status(200).json(item))
      .catch((err) =>
        res.status(400).json({
          status: "error",
          message: `${err.message}`,
          data: null,
        })
      );
  },

  update(req, res, next) {
    const { question, answer } = req.body;
    const updatefaq = {
      question,
      answer,
    };
    faq_model
      .findByIdAndUpdate(req.params.id, updatefaq, { new: true })
      .then((item) => res.status(200).json(item))
      .catch((err) =>
        res.status(400).json({
          status: "error",
          message: `${err.message}`,
          data: null,
        })
      );
  },

  delete(req, res, next) {
    faq_model
      .findByIdAndDelete(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(400).json({
          status: "error",
          message: `${err.message}`,
          data: null,
        })
      );
  },
};

module.exports = faqController;
