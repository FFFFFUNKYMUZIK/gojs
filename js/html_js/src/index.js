import "./styles.css";

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};


/*
const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");


console.log(number);
console.log(increase);
console.log(decrease);

//string
console.log(typeof number.innerText);

//object
console.log(typeof increase.onclick);

// Object
console.log(typeof number);
console.log(typeof increase);
console.log(typeof decrease);


increase.onclick = () =>{
	
	//const current = parseInt(number.innerText, 10);
  	//number.innerText = current + 1;
  	
  	number.innerText++;
}

decrease.onclick = () =>{
	
	//const current = parseInt(number.innerText, 10);
  	//number.innerText = current - 1;
  	
  	number.innerText--;
}

console.log(number.innerText)
*/