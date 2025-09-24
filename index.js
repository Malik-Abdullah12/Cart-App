// login form 0----------------------------------------------------------------

const inputfeild = document.getElementById("email1");
const password1 = document.getElementById("password1");
const button = document.getElementById("submitbtn");
// const message = document.getElementById("message");
const show_button = document.getElementById("show");

// let output = [];

button.addEventListener("click", (event) => {

  event.preventDefault();

  let userval = inputfeild.value.trim();
  let userpass = password1.value.trim();

  if (userval === "") {
    alert("Email Required ❌");
    return;
  }

  if (userpass === "") {
    alert("Passwrod Required ❌");
    return;
  }

  let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailpattern.test(userval)) {
    alert("Invalid Email Pattern❌");
    return;
  }

  if (userpass.length < 9) {
    alert("Invalid Password lenght❌");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let existinguser = users.find(
    (u) => u.username === userval && u.password === userpass
  );

  if (existinguser) {
    location.href = "cart-home.html";
    
  } else {
    alert("ID Not Found")
  }

  inputfeild.value = "";
  password1.value = "";
});

show_button.addEventListener("click", (event) => {
  event.preventDefault();
  if (password1.type === "password") {
    password1.type = "text";
    show_button.textContent = "Hide";
  } else {
    show_button.textContent = "Show";
    password1.type = "password";
  }
});



