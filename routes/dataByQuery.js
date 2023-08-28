const express = require('express');
const router = express.Router();

const Trip = require('../models/trips');

router.get('/byQuery', async(req,res) =>{
     const trip =  await Trip.find(req.query);  
     res.status(500).json(trip);       
})
module.exports = router;