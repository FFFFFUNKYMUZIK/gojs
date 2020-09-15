var express = require('express')
, http = require('http')
, app = express()

/*
app.get('/', function (req, res) {
	res.send('Hello /');
})

*/

/*
app.get('/world.html', function (req, res) {
	res.send('Hello World');	
})
*/

// GET method route
app.get('/', function (req, res, next) {
  res.send('GET request to the homepage');
  next();
},
function(req, res){
	res.send("GET next callback")
});

// POST method route
/*
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
*/

app.use(function(req, res, next){
	console.log('--------')

	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.end('<h1>Express 서버 응답 </h1>')
});


var server = http.createServer(app);

server.listen(8000, function(){
	console.log('Express server listening on port ' + server.address().port);	
})