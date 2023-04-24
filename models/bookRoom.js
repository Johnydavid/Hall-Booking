const { array } = require('joi/lib');
const { Number } = require('mongoose');
const mongoose = require('mongoose');

// Derive a Schema

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in DD-MM-YYYY format

const currentDate = date + "-" + month + "-" + year;

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const currentTime = hours + ":" + minutes + ":" + seconds


const BookroomSchema = mongoose.Schema({
    customer_name: {type:String, required:true},
    date : { type: String,  required: true},    
   startTime: {type: Number,  required: true},
 endTime : {type: Number,   required: true},
 room_id: {type:String , required: true}
})

// compile schema to model

const Booking = mongoose.model('Booking', BookroomSchema);

module.exports = Booking;