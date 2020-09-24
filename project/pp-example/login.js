document.getElementById('register').onsubmit = function (e) {
  e.preventDefault();

  var body = document.getElementById('idform').value;
  if (body && body.trim()) {
    fetch('/register', {
	  	method: 'POST',
	  	headers: {
	    'Content-Type': 'application/json'
  		}
	}).then(function(res) {
		//console.log(res.text());
		return res.text().then(function(text){
             document.querySelector('article').innerHTML = text;  
            });
	});
  } else {
    alert('getbody empty');
  }
};

document.getElementById('login').onsubmit = function (e) {

  var body = document.getElementById('postbody').value;
  e.preventDefault();
  console.log('postbody :', body);
  console.log(typeof body); //string

  if (body && body.trim()) {
    fetch('/login', {
	  	method: 'POST',
	  	headers: {
	    'Content-Type': 'application/json'
  		},
  		body: body
	}).then(function(res) {
		return res.json(); //promise
	}).then((json) =>{

		console.log('server return :');
		console.log(json);
		console.log(typeof json); //object
		console.log(JSON.stringify(json));
		console.log(typeof JSON.stringify(json)); //string
	});
  } else {
    alert('postbody empty');
  }
};