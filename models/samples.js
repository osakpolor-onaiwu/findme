const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Manufacturer = require("./manufacturer.js");

module.exports = mongoose.model(
  "Samples",
  Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    manufacturer: {
      type: Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
  })
);
