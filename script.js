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
const swiper = new Swiper('.swiper', {
	// Optional parameters
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });




