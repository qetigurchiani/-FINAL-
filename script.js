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
	let movePer = 75.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 100.36;
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


	//form validation
let registrationForm = document.getElementById("resgitrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  //username
  let usernameValue = document.getElementById("usernameField").value;
  if (usernameValue == "" && usernameValue.length < 5) {
    errors.username =
      "Username field can not be empty and must include at least one capital letter";
  }

  //password
  let passwordValue = document.getElementById("passwordField").value;
  let passwordValue2 = document.getElementById("passwordFieldrepeat").value;

  if (passwordValue == "") {
    errors.password = "Password field can not be empty";
  }
  if (passwordValue != passwordValue2) {
    errors.password2 = "Passwords do NOT macth";
  }

  //checkbox
  let agreeField = document.getElementById("agreeTerms").checked;

  if (!agreeField) {
    errors.agree = "to continue you should agree our terms and conditions";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });

  for (let key in errors) {
    let spanText = document.getElementById("error_" + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if (Object.keys(errors).length == 0) {
    registrationForm.submit();
  }
});


// email regex validation
let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("emailField").value;
  let errorSpan = document.getElementById("text");

  let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailPattern)) {
    errorSpan.innerText = "Your emal is Valid";
    errorSpan.style.color = "green";
  } else {
    errorSpan.innerText = "Your emal is invalid";
    errorSpan.style.color = "red";
  }

  if (emailValue == "") {
    errorSpan.innerHTML = " ";
  }
});
