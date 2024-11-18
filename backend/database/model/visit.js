const mongoose = require("mongoose")

const visitSchema = new mongoose.Schema({
    uid: String,
    visit: String,
    amount: String,
    notes: String,
    followUpVisit: String,
},{
    timestamps: true
})

module.exports = mongoose.model("Visit",visitSchema);