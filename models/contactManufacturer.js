const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require("./category.js");

module.exports = mongoose.model(
    "ContactManufacturer",
    Schema({
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        message: { type: String, required: true },
        location: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User" },
    })
);
