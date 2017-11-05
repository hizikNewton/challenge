var express = require('express');
var routes = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/mySchool');

router.get('/add',function(req,res,next){
	var class = db.get('class');
	class.find({},{},function(err,class){
res.render('addpost',{
		"title":"Add Student",
		"class":"class"
		});
	});---------ERROR
	
});

router.post('/add',function(req,res,next){

	var name = req.body.name;
	var email = req.body.email;
	var age = req.body.age;
	var sex = req.body.sex;
	var Class = req.body.class;
	var date = new Date();
 if(req.file.mainimage){
 	var mainImageOriginalName = req.files.mainimage.originalname;
 	var mainImageName = req.files.mainimage.name;
 	var mainImageMime = req.files.mainimage.mimetype;
 	var mainImagePath = req.files.mainimage.path;
 	var mainImageExt = req.files.mainimage.extension;
 	var mainImageSize = req.files.mainimage.size;

 	} 
 else{
 	var mainImageName = 'noimage.png'
 	}

//form validation
req.checkbody('name','Name field is required').notEmpty();
req.checkbody('email','Email field is required')
//check Errors
if(errors){
	res.render('addstudent',{
		'errors':errors,
		'title':title,
		'body':body
	});
}else{
var students = db.get('students');
	
	//submit to db
	post.insert({
		"name":name,
		"email":email,
		"age":age,
		"sex":sex,
		"Class":class,
		"date":date,
		"mainimage":mainimage
	}, function(err, post){
		if(err){
			res.send('There was an issue submitting the post')
		}else{
			req.flash('success','form submitted');
			res.location('/');
			res.redirect('/');
		}
	
	});

}


});
module.exports = router;