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
    res.send({userRecord:error});
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
 /*
    Add New Player
 */ 
  app.post('/player/addPlayer',(req,res)=>{


    con.query('INSERT INTO player (id,phone,password,name,surname,email,address,type) VALUES(?,?,?,?,?,?,?,?)',
    [
      req.body.id,
      req.body.phone,
      req.body.password,
      req.body.name,
      req.body.surname,
      null,
      null,
      "player"
    ]
    ,
    (err,result,fields)=>{
        if(err) console.log('Query error',err);
        res.send("success");
    });

  });

/*
    Fetch All Players
 */
  app.get('/player',(req,res)=>{
     con.query('SELECT * FROM player',(err,result,fields)=>{
       if(err) console.log('Query error',err);
      res.send(result);
     });
  });

/*
    Update player password
 */ 
  app.patch('/player/updatePassword/:id',(req,res)=>{
    
    con.query('UPDATE player SET password = ? WHERE id= ?',
    [
      req.body.password,
      req.params.id
    ],
    (err,result,fields)=>{
      if(err) console.log('Query error',err);
      res.send("success");
    });
  });
  
/**
   * ************************Owner
  */
 app.post('/owner/addOwner',(req,res)=>{


  con.query('INSERT INTO owner (id,phone,password,fullname,email,address,type) VALUES(?,?,?,?,?,?,?)',
  [
    req.body.id,
    req.body.phone,
    req.body.password,
    req.body.fullname,
    null,
    null,
    "owner"
  ],
  (err,result,fields)=>{
      if(err) console.log('Query error',err);
      res.send('success');
  });

}); 

/*
    Fetch All oWNERS
 */
app.get('/owner',(req,res)=>{
  con.query('SELECT * FROM owner',(err,result,fields)=>{
    if(err) console.log('Query error',err);
   res.send(result);
  });
});

/*
    Update owner password
 */

app.patch('/owner/updatePassword/:id',(req,res)=>{
    
  con.query(`UPDATE owner SET password = ? WHERE id= ?`,
  [
    req.body.password,
    req.params.id
  ],
  (err,result,fields)=>{
    if(err) console.log('Query error',err);
    res.send("success");
  });
});

// Starting our server.
app.listen(3000, () => {
    console.log('Connected');
   });

