const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const { error } = require('winston');

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb://localhost:27017/XCalibur';

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error=>{
        console.log('Error connecting to MongoDB:', error);
    });

app.use(express.json());
app.use('/api',apiRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});