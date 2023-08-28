const express = require('express');
const router = express.Router();
const Trip = require('../models/trips')
const { MongoClient } = require('mongodb');
// API endpoint to fetch data from the "state_district" collection
router.get('/data', async (req, res) => {
  const url = 'mongodb+srv://gauravyadava963998:ndQihJFt8rEKS3N3@cluster0.g55qhrv.mongodb.net/db1?retryWrites=true&w=majority'; // Update this URL with your MongoDB connection details
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db();
    const products = await db.collection('state_district').find().toArray();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not retrieve products.' });
  } finally {
    client.close();
  }
});


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
