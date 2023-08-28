const express = require('express');
const router = express.Router();
const Trip = require('../models/trips')
const { MongoClient } = require('mongodb');
// API endpoint to fetch data from the "state_district" collection
const url = 'mongodb+srv://gauravyadava963998:29071999@cluster0.g55qhrv.mongodb.net/db1?retryWrites=true&w=majority'
router.get('/data', async (req, res) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection('state_district').find().toArray();
  } catch (error) {
    return res.json({message: 'Could not retrieve products.'});
  };
  client.close();
  res.json(products);})


router.get('/data1', async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
