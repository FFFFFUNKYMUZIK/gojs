const exp = require('express');
const path = require('path');
const router = exp.Router();
//const passport = require('passport');
const Users = require('./user.js');

router.get('/', (req,res) =>{
	sID = req.session.sessionID;

	   if (sID)       //세션 ID가 있다면
     {
     	  res.redirect('/practice');
     }
     else
     {
        res.redirect('/login');
     }
})

router.get('/favicon.ico', (req, res) =>{
	res.sendFile(path.join(__dirname, 'image', 'favicon.ico'));
})

router.get('/session-debug', (req,res) =>{
	res.json({
    "req.session": req.session, // 세션 데이터
    "req._passport": req._passport, // 패스포트 데이터
  })
})

router.get('/login', (req,res) =>{
  sID = req.session.sessionID;

  if (sID) {
       res.redirect('practice');
  } else {
       res.sendFile(path.join(__dirname, 'client', 'html','main.html'));
  }
})

router.get('/practice', (req,res) =>{
	
	sID = req.session.sessionID;
	console.log('sID', sID);

	if (sID) {
        res.sendFile(path.join(__dirname, 'client', 'html','practice.html'));
    } else {
        res.redirect('/login');
    }
})

router.get('/practice2', (req,res) =>{
  
  sID = req.session.sessionID;
  console.log('sID', sID);

  if (sID) {
        res.sendFile(path.join(__dirname, 'client', 'html','practice2.html'));
    } else {
        res.redirect('/login');
    }
})

router.post('/register', (req,res) =>{

	Users.findOne({ id: req.body.id }, (findError, user) => {
      	if (findError) {
        	return;
      	}
      	
      	if (user){
      		res.redirect('/login');
      		return;
      	}

      	const reg_user = new Users();

		reg_user.id = req.body.id;
		reg_user.pw = req.body.pw;
		reg_user.save();

		console.log(`user ${req.body.id} is added!`);
      });

	res.redirect('/login');
})

router.post('/login', (req,res) =>{

	//passport.authenticate('local', {failureRedirect:'/'});

		Users.findOne({ id: req.body.id }, (findError, user) => {
      	if (findError) {
        	console.log('db error');
        	/*next(findError);*/
          return;
      	}

      	if (!user){
        	console.log('no user');
        	res.redirect('/login');
          return;
      	}
      	
      	if (user.pw === req.body.pw){
      		req.session.sessionID = user.id;
      		console.log('session is saved for ', user.id);
      		res.redirect('/practice');
      	}
      	else{
      		res.redirect('/login');
      	}
      });

});

router.post('/logout', (req, res) =>{
    req.session.destroy();
    console.log('session is deleted.');
    res.redirect('/');
});



module.exports = router;