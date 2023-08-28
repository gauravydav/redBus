const express = require('express');
const router = express.Router();
const Trip = require("../models/trips");
const Booking = require("../models/booking");
const { route } = require('./users');

router.post("/ptrip", async (req, res) => {
    try {
        const newTrip = new Trip({
            date:req.body.date,
            name: req.body.name,
            from: req.body.from,
            to: req.body.to,
            busOwnerID: req.body.busOwnerID,
            startTime: req.body.startTime,
            EndTime: req.body.endTime, // Corrected the property name to lowercase "endTime"
            category: req.body.category,
            SeatBooked: req.body.SeatBooked,
            bus_no: req.body.bus_no,
            animeties_list: req.body.animeties_list,
            busFare: req.body.busFare,
            busName: req.body.busName
        });

        await newTrip.save(); // Use "await" to wait for the saving process

        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
});

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Trips = require('../models/trips');
// //const { model } = require('mongoose');
// router.get('/getDataByDate/:date',async(req,res) =>{
//     const {date} = req.query;
//                // await find({ date: req.params.date })
//      if(!date){
//         return res.status(500).json({error : "date paramter is not presented"})
//      }
//     // console.log(date);
//     // try{   
//     //   const trips = await Trips.find({date : new Date(date)});
//     //    return res.status().json(trips);
//     // }catch(error){
//     //         return res.status(500).json({error : "inter error occured"})
//     // }
// })
// module.exports = router;