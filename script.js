"use strict";
// navbar
const mainmenu = document.querySelector('.mainmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click', close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
}

function close(){
    mainmenu.style.top = '-100%';
}

// navbar + scroll

let myNav = document.getElementById("nav");

window.onscroll = function() {
  if (document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

//section3 -> slider
let backward_sliderBtn = document.getElementById('backward-slider');
let forward_sliderBtn = document.getElementById('forward-slider');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	forward_sliderBtn.onclick = ()=>{right_mover();}
	backward_sliderBtn.onclick = ()=>{left_mover();}