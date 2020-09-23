document.getElementById('get-form').onsubmit = function (e) {

  var body = document.getElementById('getbody').value;
  e.preventDefault();
  if (body && body.trim()) {
    fetch('/', {
	  	method: 'GET',
	  	headers: {
	    'Content-Type': 'application/json'
  		}
	}).then(function(res) {
		console.log(res);
	});
  } else {
    alert('getbody empty');
  }
};

document.getElementById('post-form').onsubmit = function (e) {

  var body = document.getElementById('putbody').value;
  e.preventDefault();
  if (body && body.trim()) {
    fetch('/post', {
	  	method: 'POST',
	  	headers: {
	    'Content-Type': 'application/json'
  		},
  		body: JSON.stringify(body)
	}).then(function(res) {
		console.log(res);
	});
  } else {
    alert('getbody empty');
  }
};