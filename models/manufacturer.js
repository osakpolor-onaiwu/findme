const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./category.js');
const Samples = require('./samples');

module.exports = mongoose.model(
  'Manufacturer',
  Schema({
    fullname: { type: String, required: true },
    companyName: { type: String, required: true },
    city: { type: String, required: true, lowercase: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    sample: [{ type: Schema.Types.ObjectId, ref: 'Samples' }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    description: { type: String, required: true },
    long: { type: String },
    lat: { type: String },
  }),
);
