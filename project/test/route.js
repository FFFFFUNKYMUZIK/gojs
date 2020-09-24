const express = require('express');
const path = require('path');
const router = express.Router();

const User = require('./user.js');

const passport = require('passport');



router.get('/', (req,res) =>{
	res.sendFile(path.join(__dirname, 'html', 'main.html'));
});

router.get('/about', (req,res) =>{
	res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

router.get('/practice', (req, res) =>{
	res.sendFile(path.join(__dirname, 'html', 'practice.html'))
})


router.get('/favicon.ico', (req, res) =>{
	res.sendFile(path.join(__dirname, 'image', 'favicon.ico'));
})


/*
router.get('/', (req, res) => {
  res.render('main'); // (3)
});
router.get('/about', (req, res) => {
  res.render('about'); // (4)
});


router.get('/user/:name', (req, res) =>{
	res.json({name : req.params.name});		
});
*/


router.get('/:id', (req, res) =>{
	console.log('request for username : ', req.params.id);

	User.find({ id : req.params.id }, (err, user) =>{
		
		if (err){
			console.error(err.stack);
			next(err);
			return;
		} else if (user.length > 0){
			console.log('user already exists');
			console.log(user);
		} else{
			console.log('create new user entry : ', req.params.id);
			
			const new_user = new User({
				id : req.params.id,
				pw : req.params.id
			});
			new_user.save();
		}
		//res.render('main', {user:user});
		res.sendFile(path.join(__dirname, 'html', 'main.html'));
	})
	
})


router.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), (req, res) => {
	console.log('login request');
  res.redirect('/');
});

router.post('/:post', (req, res) => {
	console.log('post request! ');

	//body-parser parsed body of request
	console.log(req.body); 
	console.log(typeof req); //object
	console.log(typeof req.body); //object

	//when client request for /xxxx, then xxxx is saved in req.params.post
	console.log(req.params.post);

	
	/*
  User.create({ name: req.body.name }, (err, res) => {
    if (err) {
      return next(err);
    }

    console.log('res: ',res);
    
    res.json({name: req.body.name});
  });
	*/
	
	// echo
	res.send(req.body);
	/*
    res.json(req).then((json)=>{
    	console.log(json);
    });
    */
    //res.json({name: req.body.name});
});

module.exports = router;