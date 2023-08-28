const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
    name: { type: String, required: true },
    from:{type:String, required: true },
    destination :{type:String, required: true },
    date: { type: Date, }
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;