document.getElementById('logout-form').onsubmit = function (e) {
  e.preventDefault();

  fetch('/logout', {
   	method: 'POST',
	 	headers: {
	   'Content-Type': 'application/json'
  	},
  	body : JSON.stringify({
    })
	})
/*
  .then(function(res) {
		return res.json(); //promise
	}).then((json) =>{
		
	});
*/
};
