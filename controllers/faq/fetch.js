const Faq = require("../../models/FAQ");

const fetch = async (req, res, next) => {
  await Faq.find()
    .sort({ ts: 1 })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `FAQ FETCHED`,
        data,
      })
    )
    .catch((err) =>
      res.status(404).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = fetch;
