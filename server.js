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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://footbooking-959a6.firebaseio.com"
});

app.get("/phone/:phoneID",(req,res)=>{

  const phoneID = req.params.phoneID;
  admin.auth().getUserByPhoneNumber(phoneID)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
    res.send(userRecord.toJSON());
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
    res.send(error);
  });

});



let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "raoufcvc_footballbooking"
  });
  con.connect();
  app.get("/owner",(req,res)=> {

        con.query("SELECT slot.date , slot.start,slot.service_id,slot.end , service.type_match,service.time_match,service.tarif,service.owner_id FROM slot  INNER JOIN service on slot.service_id = service.id WHERE service.owner_id = 'hareth'",  (err, result, fields) => {
          if (err) res.send(err);
          res.send(result);
         
        });
     
  });

  




// Starting our server.
app.listen(3000, () => {
    console.log('Connected');
   });

