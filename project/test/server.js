const host = '127.0.0.1'
const port = 8080

/*
const http = require('http');
const url = require('url');
const fs = require('fs');

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

app.use(express.static(path.join(__dirname, 'html')));
app.get('/', (req,res) =>{
	res.send('Hello World!');
})
app.listen(port, host, () => {
	console.log(`Express server listen : http://${host}:${port}/`);
})