// navbar + scroll

let myNav = document.getElementById("nav");

window.onscroll = function () {
  if (document.documentElement.scrollTop >= 530) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

//section 4 -> slider
let backward_sliderBtn = document.getElementById("backward-slider");
let forward_sliderBtn = document.getElementById("forward-slider");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length);
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

// footer
// email form + validation
let emailField = document.getElementById("emailField");
emailField.addEventListener("keyup", function () {
  let emailValue = emailField.value;
  let errorSpan = document.getElementById("submit-text");

  if (validateEmail(emailValue)) {
    errorSpan.innerText = "Your emal is Valid";
    errorSpan.style.color = "yellow";
  } else {
    errorSpan.innerText = "Your emal is inValid";
    errorSpan.style.color = "white";
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


// api

// let chef = document.getElementById('chefs');

// async function getUsers() {
//   let url = 'https://testimonialapi.toolcarton.com/api';
//   try {
//       let responseText = await fetch(url);
//       return await responseText.json();
//   } catch (error) {
//       console.log(error);
//   }
// }

// async function renderUsers() {
//   let users = await getUsers();
//   let html = '';
//   console.log(users);
//   for(var i=0;i<4;i++){
//     html += users[i].name + ' '; 
//   }
//   chef.innerHTML = html;
// }

// renderUsers();

// api

fetch("https://reqres.in/api/users?page=1&per_page=3", {
  method: "GET",
})
  .then(function (item1) {
    if (item1.status != 200) {
      throw item1.status;
    }
    return item1.json();
  })
  .then(function (item2) {
    let chefsContainer = document.getElementById("chefs-container");
    item2.data.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("img");

      let divAvatar = document.createElement("div");
      let img = document.createElement("img");
      img.classList.add("chefs-img");
      img.src = item.avatar;
      img.alt = "avatar";
      divAvatar.appendChild(img);

      let names = document.createElement("h2");
      names.innerText = item.first_name + " " + item.last_name;

      let experience  = document.createElement("h3");
      experience.innerText = "15 წლიანი სამუშაო გამოცდილება";

      div.appendChild(divAvatar);
      div.appendChild(names);
      div.appendChild(experience);

      chefsContainer.appendChild(div);
    });
  });
