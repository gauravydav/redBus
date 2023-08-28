const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  date: Number,
  from: String,
  to: String,
  busOwnerID: Number,
  startTime: Number,
  EndTime: Number,
  category: String,
  SeatBooked: [String],
  bus_no: String,
  animeties_list: [String],
  busFare: Number,
  busName: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
