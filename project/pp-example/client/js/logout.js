document.getElementById('logout-form').onsubmit = function (e) {
  e.preventDefault();

  fetch('/logout', {
   	method: 'POST',
	 	headers: {
	   'Content-Type': 'application/json'
  	},
  	body : JSON.stringify({
    }),
    redirect: 'follow'
	})
  .then((res) =>{
      if (res.redirected){
        /* manual redirect */
        window.location.href = res.url;
      }
  })
};
