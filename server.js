//jshint esversion:6
const mysql =  require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "raoufcvc_footballbooking"
  });
  
  app.get("/owner",(req,res)=> {

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM service",  (err, result, fields) => {
          if (err) throw err;
          console.log(result);
        });
      });

  })




// Starting our server.
app.listen(3000, () => {
    console.log('Connected');
   });