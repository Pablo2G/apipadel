const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {type: String, required: true},
    street: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    user: {type: String, required: true},
    pass: {type: String, required: true},
    admin: {type: Boolean, required: true}
});

module.exports = mongoose.model('Users', usersSchema);