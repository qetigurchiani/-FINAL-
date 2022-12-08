// navbar + scroll

let myNav = document.getElementById("nav");

window.onscroll = function () {
  if (document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

//section3 -> slider
let backward_sliderBtn = document.getElementById("backward-slider");
let forward_sliderBtn = document.getElementById("forward-slider");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 75.34;
let maxMove = 203;
// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 100.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};
forward_sliderBtn.onclick = () => {
  right_mover();
};
backward_sliderBtn.onclick = () => {
  left_mover();
};

// email form + validation
let emailField = document.getElementById("emailField");
emailField.addEventListener("keyup", function () {
  let emailValue = emailField.value;
  let errorSpan = document.getElementById("submit-text");

  if (validateEmail(emailValue)) {
    errorSpan.innerText = "Your emal is Valid";
    errorSpan.style.color = "green";
  } else {
    errorSpan.innerText = "Your emal is inValid";
    errorSpan.style.color = "red";
  }

  if (emailValue == "") {
    errorSpan.innerHTML = " ";
  }
});

function validateEmail(value){
  let emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value.match(emailPattern)) {
      return true;
    } else {
      return false;
    }
}
