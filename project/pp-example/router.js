const exp = require('express');
const path = require('path');
const router = exp.Router();
const passport = require('passport');
const Users = require('./user.js');

/* crypto func */
const {encrypt, decrypt} = require('./crypto');

/* redirect to login page for who is not authenticated */
const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};

/* favicon request */
router.get('/favicon.ico', (req, res) =>{
  res.sendFile(path.join(__dirname, 'image', 'favicon.ico'));
})

router.get('/', isAuthenticated, (req,res) =>{
	 res.redirect('/practice');
})


router.get('/session-debug', (req,res) =>{
	res.json({
    "req.session": req.session, // 세션 데이터
    "req._passport": req._passport, // 패스포트 데이터
  })
})


router.get('/login', (req,res, next) =>{
  if (req.isAuthenticated()){
    res.redirect('/practice');
    return next();
  }

  const msg = req.flash('error');
  res.sendFile(path.join(__dirname, 'client', 'html','main.html'));
})

router.get('/practice', isAuthenticated, (req,res) =>{
	  res.sendFile(path.join(__dirname, 'client', 'html','practice.html'));
})

router.get('/practice2', isAuthenticated, (req,res) =>{
    res.sendFile(path.join(__dirname, 'client', 'html','practice2.html')); 
})

router.get('/logout', isAuthenticated, (req, res) =>{
    req.logout();
    console.log('[passport] logout');
    res.redirect('/login');
});

router.post('/register', (req,res, next) =>{
  
  Users.findOne({ id: req.body.id }, (findError, user) => {
      	if (findError) {
          throw findError;
      	}
      	
      	if (user)
          return user;

        return undefined;
  })
  .then( (user)=>{
      if (user){
        req.flash('error', '이미 존재하는 아이디입니다')
        res.redirect('/login');
      }
      else{
        const reg_user = new Users();

        reg_user.id = req.body.id;
        reg_user.pw = encrypt(req.body.pw);
        reg_user.save();

        console.log(`user ${req.body.id} is added!`);

        req.flash('error', '가입 완료되었습니다 : ' + req.body.id);
        res.redirect('/login');
      }
    })
  .catch(err => alert(err));

})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/practice',
    failureRedirect: '/login',
    failureFlash: true
  })
);



module.exports = router;