const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: String,
    DOB: String,
    contact: String,
    place: String,
},{
    timestamps: true
})

module.exports = mongoose.model("Patient",patientSchema);