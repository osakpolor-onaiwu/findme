const Logs = require("../models/logsModel");

const fetch = async (req, res, next) => {
  await Logs.find()
    .sort({ ts: 1 })
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `LOGS FETCHED`,
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

module.exports = fetch;
