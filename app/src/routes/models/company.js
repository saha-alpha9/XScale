const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    country: String,
    revenue: Number,
    funding: Number,
    customers: Number,
    incubated: String
});

const Company = mongoose.model('company', companySchema);

module.exports = Company;