document.getElementById('register-form').onsubmit = function (e) {
  e.preventDefault();

  const idbody = document.getElementById('id-input1').value;
  const pwbody = document.getElementById('pw-input1').value;

  if (!(idbody && idbody.trim())){
    alert('id empty');
    return;
  }
  if (!(pwbody && pwbody.trim())){
    alert('password empty');
    return;
  }

  fetch('/register', {
   	method: 'POST',
	 	headers: {
	   'Content-Type': 'application/json'
  	},
    body : JSON.stringify({
      id : idbody,
      pw : pwbody,
    })
	}).then(function(res) {   
    console.log(res);
		return res.text().then(function(text){
      document.write(text);         
    });
	});
  
};

document.getElementById('login-form').onsubmit = function (e) {
  e.preventDefault();

  const idbody = document.getElementById('id-input2').value;
  const pwbody = document.getElementById('pw-input2').value;

  console.log(idbody);
  console.log(pwbody);

  if (!(idbody && idbody.trim())){
    alert('id empty');
    return;
  }
  if (!(pwbody && pwbody.trim())){
    alert('password empty');
    return;
  }

  fetch('/login', {
   	method: 'POST',
	 	headers: {
	   'Content-Type': 'application/json'
  	},
  	body : JSON.stringify({
      id : idbody,
      pw : pwbody,
    })
	}).then(function(res) {

      return res.text().then(function(text){
      document.write(text);   
    });
  });

/*
		return res.json(); //promise
	}).then((json) =>{

		console.log('server return :');
		console.log(json);
		console.log(typeof json); //object
		console.log(JSON.stringify(json));
		console.log(typeof JSON.stringify(json)); //string
	});
*/

};
