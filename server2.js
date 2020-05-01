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

app.get('/phone/:phoneID',(req,res)=>{

  const phoneID = req.params.phoneID;
  

  admin.auth().getUserByPhoneNumber(phoneID)
  .then(function(userRecord) {
    const uid = userRecord.uid;
    const expiresIn = 3600;
    
    if(uid){ 
      admin.auth().createCustomToken(uid)
        .then(function(customToken) {
          // Send token back to client
          const expirationDate= new Date(new Date().getTime() + expiresIn * 1000);
          const token= customToken;
          res.send({userRecord:userRecord.toJSON(),token:token,expirationDate:expirationDate});
          console.log('Successfully fetched user data:', userRecord.toJSON());
        })
        .catch(function(error){
          console.log('Error creating custom token:', error);
        });
    }

    
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
    res.send(error);
  });

});


let con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "footbooking"
  });
 
  con.connect( err => {
    if (err) {
      console.log(err);
    }
  })
  
  /**
   * ************************Player
  */
  app.get('/player/:id/:phone/:password/:name/:surname',(req,res)=>{

    const data = {
        id:req.params.id,
        phone:req.params.phone,
        password:req.params.password,
        name:req.params.name,
        surname:req.params.surname,
    };

    con.query(`INSERT INTO player (id,phone,password,name,surname,email,address,type) VALUES("${data.id}","${data.phone}","${data.password}","${data.name}","${data.surname}",null,null,"player")`,(err,result,fields)=>{
        if(err) console.log('Query error',err);
        console.log('Row affected',result);
    });

  });
  
/**
   * ************************Owner
  */
 app.get('/owner/:id/:phone/:password/:fullname',(req,res)=>{

  const data = {
      id:req.params.id,
      phone:req.params.phone,
      password:req.params.password,
      fullname:req.params.fullname,
  };

  con.query(`INSERT INTO owner (id,phone,password,fullname,email,address,type) VALUES("${data.id}","${data.phone}","${data.password}","${data.fullname}",null,null,"owner")`,(err,result,fields)=>{
      if(err) console.log('Query error',err);
      console.log('Row affected',result);
      res.send("success");
  });

}); 

// Starting our server.
app.listen(3000, () => {
    console.log('Connected');
   });

