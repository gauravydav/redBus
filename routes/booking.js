const express = require('express');
const router = express.Router();
const Booking = require('../models/booking')

router.post("/booking", async (req, res) => {
    try {
        const { name, from, destination, date } = req.body;
        
        if (!name || !destination || !date) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        
        const newBooking = new Booking({
            name,
            from,
            destination,
            date
        });
        
        await newBooking.save(); // Use "await" to wait for the saving process
        
        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data' });
    }
});

module.exports = router;
