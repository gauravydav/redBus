const express = require('express');
const router = express.Router();
const Trip = require("../models/trips")


router.get('/data', async (req, res) => {
   //const date = req.query.date;
   //console.log(req.query);
  // console.log(req.params.id);
  const queryParams = req.query;
   try {
     const trips = await Trip.find(queryParams);
     res.json(trips);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Internal server error' });
   }
 });




  module.exports = router;