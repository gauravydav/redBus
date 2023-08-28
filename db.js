const express = require('express');
const mongoose = require('mongoose');
//ndQihJFt8rEKS3N3
const mongoURI = "mongodb+srv://gauravyadava963998:ndQihJFt8rEKS3N3@cluster0.g55qhrv.mongodb.net/db1?retryWrites=true&w=majority"
const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});
module.exports = db;