//jshint esversion:6
const mysql =  require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require("./helpers/serviceAccountKey.json");//Firebase NodeJs linking

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

//CONNECT THE DATABASE
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "raoufcvc_footballbooking"
  });
  con.connect();

//GET THE OWNER'S OFFERS
  app.get("/owner/:ownerName",(req,res)=> {
    const ownerName = req.params.ownerName;
 

   con.query("SELECT slot.date , slot.start,slot.service_id,slot.end , service.type_match,service.time_match,service.tarif,service.owner_id,service.stadiumNum FROM slot  INNER JOIN service on slot.service_id = service.id WHERE service.owner_id = ? ",[ownerName],(err, result, fields) => {
          if (err) res.send(err);
          res.send(result);
         
        });
      });

//GET THE BOOKING'S
app.get("/bookings/getbookings/:playerId",(req,res)=>{

const playerId = req.params.playerId;

const query = "SELECT booking.date,booking.date_booking,booking.start,booking.end,booking.player_id,booking.owner_id,booking.service_id,service.type_match,service.time_match,service.tarif from booking INNER JOIN service on booking.service_id = service.id WHERE booking.player_id = ? "


con.query(query,[playerId],(err,result,fields)=>{
    if(err) res.send(err);

    res.send(result);

});



});



//ADD A NEW BOOKING TO THE DATABASE   
  app.post("/bookings/addbooking",(req,res)=>{
    console.log("HELLO");
    console.log(req.body);
   con.query("INSERT INTO booking (date,date_booking, start, end,player_id,owner_id,service_id) VALUES (?, ?, ?, ?, ?, ?,?)"
   ,[
    req.body.date,
    req.body.bookingDate, 
    req.body.start,
    req.body.end,
    req.body.playerId,
    req.body.ownerId,
    req.body.serviceId
  ],
   
   (err,result,fields)=>{
     if (err){
       console.log("THERE IS An ERROR");
      res.send(err); }
      console.log("success");
      res.send("Success");
    });

     
    

  });




// Starting our server.
app.listen(3000, () => {
    console.log('Connected');
   });

