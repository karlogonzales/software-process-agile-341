var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
  name: String,
  a_Answer: String,
  b_Answer: String,
  c_Answer: String,
  d_Answer: String
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;
