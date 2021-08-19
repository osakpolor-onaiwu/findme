const manufacturer = require("../../models/manufacturer");

const fetch = async (req, res, next) => {
  await manufacturer
    .find()
    .populate("category")
    .select("-phone -sample ")
    .sort({ name: 1 })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `MANUFACTURERS FETCHED`,
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
