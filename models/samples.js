const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports =
    ("Samples",
    Schema({
        image: { type: String },
        description: { type: String },
        manufacturer: { type: Schema.Types.ObjectId, ref: "Manufacturer" },
    }));
