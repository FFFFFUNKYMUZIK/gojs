/*
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name: String,
	data: Object,
});
module.exports = mongoose.model('User', userSchema);
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  pw: String
});

userSchema.methods.comparePassword = function(inputPassword, cb) {
	console.log('compare password');
	console.log(inputPassword);
	console.log(this.pw);
  if (inputPassword === this.pw) {
    cb(null, true);
  } else {
    cb('error');
  }
};

module.exports = mongoose.model('users', userSchema, 'users');