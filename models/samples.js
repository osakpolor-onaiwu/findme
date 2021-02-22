const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Samples',
  Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
  }),
);
