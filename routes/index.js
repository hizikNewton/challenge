var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/mySchool');

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var students = db.get('students');
	students.find({},{},function(err,students))
	res.render('index',{
			"students":students
		});
	});
 
module.exports = router;
   