const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/users")
const pTrips = require('./routes/postTrips');
const booking = require("./routes/booking");
const dateData = require('./routes/getDataByDate');
const queryData = require('./routes/dataByQuery');
const db = require("./db");
const app = express();
var cors = require('cors')
//var app = express()
 


const port = process.env.PORT || 6000;


//middleWare
app.use(cors())
app.use(express.json());



// API endpoint to create a new user
app.use('/users', userRoutes);
app.use('/p',pTrips);
app.use('/b',booking);
app.use('/d',dateData);
app.use('/q',queryData);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
