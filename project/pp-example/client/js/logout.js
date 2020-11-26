document.getElementById('logout-form').onsubmit = function (e) {
  e.preventDefault();

  fetch('/logout', {
   	method: 'GET',
	 	headers: {
	   'Content-Type': 'application/json'
  	},
    redirect: 'follow'
	})
  .then((res) =>{

      if (res.redirected){
        /* manual redirect */
        window.location.href = res.url;
      }
      else{
        ajax_render(res);
      }
  })
};
