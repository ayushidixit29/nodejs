var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});

router.get('/', function(req, res, next) {
  console.log("Ayushi");
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('login')
});

router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `Ayushi` (`email`, `pass`) \
    VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
      // var sql1 = "select * from `qqq`"
      // con.query(sql1, function (err, result) {
      //   if (err) throw err;
      //   console.log(result);
      // });
res.json({"Name":req.body})
});

module.exports = router;