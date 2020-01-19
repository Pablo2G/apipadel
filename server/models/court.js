const mongoose = require('mongoose');
const { Schema } = mongoose;

const courtSchema = new Schema({
    name: {type: String, required: true},
    state: {type: Boolean, required: true},
});

module.exports = mongoose.model('Court', courtSchema);