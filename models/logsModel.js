const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "logs",
  Schema({
    type: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
    ts: { type: Date, default: Date.now },
  })
);
