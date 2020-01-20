const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema({
    user: {type: String, required: true},
    court: {type: String, required: true},
    date: {type: String, required: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);