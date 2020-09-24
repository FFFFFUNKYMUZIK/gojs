document.getElementById('get-form').onsubmit = function (e) {

  var body = document.getElementById('getbody').value;
  e.preventDefault();
  console.log('getbody :', body);
  if (body && body.trim()) {
    fetch('/'+body, {
	  	method: 'GET',
	  	headers: {
	    //'Content-Type': 'application/json'
	    'Content-Type': 'text/html'
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

document.getElementById('post-form').onsubmit = function (e) {

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