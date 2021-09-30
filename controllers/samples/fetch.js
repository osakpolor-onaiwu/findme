const Samples = require("../../models/samples");

const fetch = async (req, res, next) => {
  await Samples.find()
    .populate("manufacturer")
    .then((sample) => {
      //we should change the localhost:5000 to where we host it to
      //I had to do this because the image was not showing
      const modifiedSample = sample.map((item) => {
        item.image = `http://localhost:5000/${item.image}`;
        return item;
      });

      res.status(200).json({
        status: "Success",
        message: `SAMPLES FETCHED`,
        data: modifiedSample,
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

module.exports = fetch;
