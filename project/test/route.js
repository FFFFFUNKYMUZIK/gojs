const express = require('express');
const path = require('path');
const router = express.Router();

const User = require('./user.js');


/*
router.get('/', (req,res) =>{
	res.sendFile(path.join(__dirname, 'html', 'main.html'));
});
router.get('/about', (req,res) =>{
	res.sendFile(path.join(__dirname, 'html', 'about.html'));
});
*/

router.get('/', (req, res) => {
  res.render('main'); // (3)
});
router.get('/about', (req, res) => {
  res.render('about'); // (4)
});

router.get('/:name', (req, res) =>{
	console.log('request for username : ', req.params.name);

	User.find({ name : req.params.name }, (err, user) =>{
		
		if (err){
			console.error(err.stack);
			return;
		} else if (user.length > 0){
			console.log('user already exists');
			console.log(user);
		} else{
			console.log('create new user entry : ', req.params.name);
			
			const new_user = new User({
				name : req.params.name,
				data : 0
			});
			new_user.save();
		}
		res.render('main', {user:user});
	})
	
})

module.exports = router;