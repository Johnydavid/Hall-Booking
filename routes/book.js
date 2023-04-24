const router = require("express").Router();
const Booking = require("../models/bookRoom");

// Create Operation
router.route("/").post((req, res) => {

    let ts = Date.now();

let date_ob = new Date(ts);
let  date1 = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in DD-MM-YYYY format

const currentDate = date1 + "-" + month + "-" + year;

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const currentTime = hours 
// const endingtTime = hours 




   const customer_name = req.body.customer_name;
   const date = currentDate ;
  const startTime = currentTime;
 const endTime =  ((req.body.endTime) + currentTime + 1);
 const room_id = req.body.room_id;
  

  const newBooking = new Booking({
   customer_name,
   date,
   startTime,
   endTime,
   room_id
  });

  newBooking.save()
    .then(() => {
      res.json("Room Booked");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;
