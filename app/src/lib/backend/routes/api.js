const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.get('/companies', async(req,res)=>{
    try {
        const companies = await Company.find();
        res.json(companies);
    }catch (error){
        res.status(500).json( {error: 'Internal Server Error'});
    }
});

router.post('/companies', async(req,res)=>{
    try{
        const newcompany = new Company(req.body);
        await newcompany.save();
        res.status(201).json(newcompany);
    }catch(error){
        res.status(400).json({error: 'Bad Request'});
    }
});

module.exports = router;