const show_button = document.getElementById("show1");

const first = document.getElementById("firstname")
const second = document.getElementById("lastname")

const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");

const button = document.getElementById("signup-btn");

let users = JSON.parse(localStorage.getItem("users")) || [];


function save(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function maskPassword(pass) {
  return "•".repeat(pass.length); 
}

// Sign up button checks ----------------------
button.addEventListener("click", (event)=> {
  
  event.preventDefault();

  let userfirst = first.value.trim()
  let usersecond = second.value.trim()
  let userval = email2.value.trim();
  let userpass = password2.value.trim();

  if (userfirst === "") {
    alert("Plz Enter First Name ❌");
    return;
  }

  if (usersecond === "") {
    alert("Plz Enter second Name ❌");
    return;
  }


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

  // else if (userval===values.username) {
  //   alert("Email is Already in use")
  // }

  if(users.some(u=>u.username === userval)){
    alert("Email is already in use")
  }

  else{
    alert("Your Account has been created ")
  // let mask = maskPassword(userpass)  
  let values = {
    username:userval, 
    password:userpass
  }

  users.push(values)
  // console.log(users)
  // localStorage.setItem("users", JSON.stringify(users));
  save(users)


  first.value = ""
  second.value = ""
  email2.value = ""
  password2.value = ""

}
});

// Password show button 

show_button.addEventListener("click", (event) => {
  event.preventDefault();
  if (password2.type === "password") {
    password2.type = "text";
    show_button.textContent = "Hide";
  } else {
    show_button.textContent = "Show";
    password2.type = "password";
  }
});
