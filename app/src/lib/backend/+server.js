const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const { error } = require('winston');

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://soumyadeepsaha2345:SSaha@1300709@cluster0.htoh2ql.mongodb.net/?retryWrites=true&w=majority';

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