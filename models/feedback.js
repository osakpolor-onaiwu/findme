const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Feedback",
  Schema({
    email: {
      type: String,
      required: true,
    },
    feedBackType: {
      type: String,
      enum: ["compliant", "suggestion", "question"],
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    ts: { type: Date, default: Date.now },
  })
);
