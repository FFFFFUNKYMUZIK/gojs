  const ajax_render = async (res) => {
    try {
      const contentType = res.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        const json = await res.json();
        if (json.content){
          document.getElementById('json-body').innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
        }
        if (json.message){
          alert(json.message);
        }
      } else {
        res.innerHTML = await res.text();
      }
    } catch (err) {
      console.error(err);
    }
  };

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
    }),
    redirect: 'follow'
	}).then(function(res) {   
      if (res.redirected){
        /* manual redirect */
        window.location.href = res.url;
      }
      else{
        ajax_render(res);
      }
	});
  
};

document.getElementById('login-form').onsubmit = function (e) {
  e.preventDefault();

  const idbody = document.getElementById('id-input2').value;
  const pwbody = document.getElementById('pw-input2').value;

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
    }),
    redirect: 'follow'
	})
  .then((res) =>{

    console.log(res);

     if (res.redirected){
        /* manual redirect */
        window.location.href = res.url;
      }
      else{
        ajax_render(res);
      }
  });

  /*
  .then(function(res) {
      return res.text().then(function(text){
      document.write(text);   
    });
  });
  */
  

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
