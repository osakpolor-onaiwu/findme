const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Seller",
  Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    companyName: { type: String, required: true, unique: true },
    state: { type: String, required: true },
    companyLocation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    landmark: { type: String, required: true },
    description: { type: String, required: true },
    long: { type: String },
    lat: { type: String },
  })
);
