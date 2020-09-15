
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Email: { type: String, unique: true },
    PhoneNumber: { type: Number },
    ProfileImage: { type: String }
});


module.exports.Users = mongoose.model('Users', Users);