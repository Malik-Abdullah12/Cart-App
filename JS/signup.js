// -----------------------------Constants--------------------------------------
const show_button = document.getElementById("show1");

const first = document.getElementById("firstname")
const second = document.getElementById("lastname")

const email2 = document.getElementById("email2");
const password2 = document.getElementById("password2");

const button = document.getElementById("signup-btn");

const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//-----------------------Toastify function --------------------------
function showToast(message, bg = "#00b09b") {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "center",
    close: true,
    style: {
       background: "linear-gradient(180deg, #111, #070707)",
      color: "var(--neon)",
      border: "1px solid rgba(255, 212, 0, 0.35)",
      borderRadius: "var(--radius)",
      boxShadow: "0 0 15px rgba(255, 212, 0, 0.6)",
      fontFamily: '"Orbitron", "Inter", sans-serif',
      fontWeight: "700",
      letterSpacing: "0.5px",
      padding: "14px 18px",
    },
    stopOnFocus: true,
  }).showToast();
}

// -----------------------Local Storage---------------------------------
let users = JSON.parse(localStorage.getItem("users")) || [];


function save(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// function maskPassword(pass) {
//   return "•".repeat(pass.length); 
// }

// Sign up button checks ----------------------
button.addEventListener("click", (event)=> {
  
  event.preventDefault();

  let userfirst = first.value.trim()
  let usersecond = second.value.trim()
  let userval = email2.value.trim();
  let userpass = password2.value.trim();

  if (userfirst === "") {
    showToast("Plz Enter First Name ❌");
    return;
  }

  if (usersecond === "") {
    showToast("Plz Enter second Name ❌");
    return;
  }


  if (userval === "") {
    showToast("Email Required ❌");
    return;
  }

  if (userpass === "") {
    showToast("Passwrod Required ❌");
    return;
  }

  if (!emailpattern.test(userval)) {
    showToast("Invalid Email Pattern❌");
    return;
  }

  if (!passwordRegex.test(userpass)) {
    showToast("Password must contain 8 characters, upper, lower, number & symbol❌");
    return;
  }

  // else if (userval===values.username) {
  //   showToast("Email is Already in use")
  // }

  if(users.some(u=>u.username === userval)){
    showToast("Email is already in use")
    return;
  }

  else{
    showToast("Your Account has been created ")
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
