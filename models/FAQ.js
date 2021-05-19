const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model(
  'faq',
  Schema({
    question:{type:String,required:true},
    answer:{type:String,required:true}
  }),
);
