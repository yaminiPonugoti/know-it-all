const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// we create a user schema
let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
   // trim: true
  },
  password: {
    type: String,
    required: true
  },
}); // 'runSettersOnQuery' is used to implement the specifications in our model schema such as the 'trim' option.


var user = mongoose.model('user', userSchema);

module.exports = user;