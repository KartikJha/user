var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username:  { type: String, unique: true },
	password: { type: String, required: true},
	email: { type: String, required: true, unique: true, index: true },
	screened: { type: Boolean, default: false },
	authP: { type: String, enum: ['Us', 'Google'], default: 'Us' },
	mobile: { type: String, required: true },
});

module.exports = mongoose.model('Users', userSchema);