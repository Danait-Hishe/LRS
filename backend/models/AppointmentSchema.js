const mongoose = require('mongoose')
const Schema = mongoose.Schema;




const appointmentSchema = new Schema({
    customerName: String,
    appointmentTime: String,
  });

module.exports = mongoose.model("Appointment",appointmentSchema)