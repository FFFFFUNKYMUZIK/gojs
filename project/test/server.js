const host = '127.0.0.1'
const port = 8080


const http = require('http');
const url = require('url');
const fs = require('fs');

/*
server = http.createServer((req, res) => {
  console.log('receive request!');
   const path = url.parse(req.url, true).pathname;

  	if (req.method === 'GET') { // GET 요청이면
	    if (path === '/about') { // 주소가 /about이면
	      res.writeHead(200,{'Content-Type':'text/html'}); // header 설정
	      fs.readFile(__dirname + '/about.html', (err, data) => { // 파일 읽는 메소드
	        if (err) {
	          return console.error(err); // 에러 발생시 에러 기록하고 종료
	        }
	        res.end(data, 'utf-8'); // 브라우저로 전송
	      });
	    } else if (path === '/') { // 주소가 /이면
	      res.writeHead(200,{'Content-Type':'text/html'});
	      fs.readFile(__dirname + '/main.html', (err, data) => {
	        if (err) {
	          return console.error(err);
	        }
	        res.end(data, 'utf-8');
	      });
	    } else { // 매칭되는 주소가 없으면
	      res.statusCode = 404; // 404 상태 코드
	      res.end('주소가 없습니다');
	    }
	}
});

server.listen(port, host, (req,res) =>{
	console.log(`Server running : http://${host}:${port}/`)	
});
*/

const express = require('express');
const path = require('path');
const app = express();
const router = require('./route.js');

/*
app.use(express.static(path.join(__dirname, 'html')));

app.use((req, res, next) =>{
	console.log('custom middleware');
	next();
})
app.use('/', router)

app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
  next(new Error());
});
app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});

app.listen(port, host, () => {
	console.log(`Express server listen : http://${host}:${port}/`);
})

*/



const db = require('./db.js');

const methodOverride = require('method-override');
const bodyParser = require('body-parser');

/*
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'pug'));
*/

db();

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', router);

app.listen(port, host, () => {
	console.log(`Express server listen : http://${host}:${port}/`);
})
