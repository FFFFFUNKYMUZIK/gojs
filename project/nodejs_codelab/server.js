const http = require("http");

/*
//loopback
const hostname = "127.0.0.1";
const port = 3000;
*/

const server = http.createServer((req, res) =>{
	//res.statusCode = 404;
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, World!\n");
})

/*
server.listen(port, hostname, () =>{
	console.log(`Server running : http://${hostname}:${port}/`)	
})
*/

module.exports = server