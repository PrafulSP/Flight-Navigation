// Imports
//const express = require('express')
//const app = express()
//const port = 5000
const express = require("express"),
  app = express(),
  cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var mysql = require('mysql');
const { restart } = require("nodemon");

// Set Templating Engine
//app.use(expressLayout)
//app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res)=> {
    res.render('index')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

app.get('/city',(req, res)=> {
    
// For connection sql and nodejs

var con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "root",
  database: "flightinfo",
  port: 3325
});

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM city", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});
})

app.get('/available',(req, res)=> {
    

    var con = mysql.createConnection({
      host: "localhost",
      user: "username",
      password: "root",
      database: "flightinfo",
      port: 3325
    });
    
    con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        con.query("SELECT * FROM available", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
    })


    app.get('/ticketinfo',(req, res)=> {
        
        const data = req.query;
        var con = mysql.createConnection({
          host: "localhost",
          user: "username",
          password: "root",
          database: "flightinfo",
          port: 3325
        });
        
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            // Dynamically inserts data from page 1
            var sql = `INSERT INTO ticketinfo (tid,fcity,tcity,date,passengers) VALUES ( NULL,"${data.sf}"," ${data.st}","${data.Departing}",${Number(data.kids)})`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
              res.redirect("http://127.0.0.1:5501/search.html")
            });
          });

    })
// Listen on Port 5000
app.listen(5000, () => console.info(`App listening on port ${5000}`))