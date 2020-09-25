const exp = require('express');
const path = require('path');
const router = exp.Router();
const passport = require('passport');
const Users = require('./user.js')

router.get('/', (req,res) =>{
	const count = 0;
	res.cookie('count', count);
	res.redirect('/login');
})

router.get('/favicon.ico', (req, res) =>{
	res.sendFile(path.join(__dirname, 'image', 'favicon.ico'));
})

router.get('/session-debug', (req,res) =>{
	res.json({
    "req.session": req.session, // 세션 데이터
    "req.user": req.user, // 유저 데이터(뒷 부분에서 설명)
    "req._passport": req._passport, // 패스포트 데이터(뒷 부분에서 설명)
  })
})

router.get('/login', (req,res) =>{
	res.sendFile(path.join(__dirname, 'client', 'html','main.html'));
})


router.post('/register', (req,res) =>{
	res.sendFile(path.join(__dirname, 'client', 'html','practice.html'))
})

router.post('/login', (req,res) =>{
	console.log('5');
})






module.exports = router;