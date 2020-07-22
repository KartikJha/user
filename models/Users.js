var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username:  { type: String }, // String is shorthand for {type: String}
	password: String,
	email: {type: String, required: true },
});

module.exports = mongoose.model('Users', userSchema);