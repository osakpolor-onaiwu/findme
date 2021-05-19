const faq_model = require('../models/FAQ')


const faqController = {
  create(req, res) {

    const {question,answer} =req.body
    const newFaq = new faq_model({
      question,
      answer
    });

    newFaq
      .save()
      .then((item) => res.status(200).json(item))
      .catch((err) => res.status(400).json(err));
  },

  readAll(req, res) {
    faq_model.find()
      .then((item) => res.status(200).json(item))
      .catch((err) => res.status(400).json(err));
  },

  update(req, res) {
    const { question,answer } = req.body;
    const updatefaq = {
      question, answer
    };
    faq_model.findByIdAndUpdate(req.params.id, updatefaq, { new: true })
      .then((item) => res.status(200).json(item))
      .catch((err) => res.status(400).json(err));
  },

  delete(req, res) {
    faq_model.findByIdAndDelete(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = faqController;
