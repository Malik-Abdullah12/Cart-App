// login form 0----------------------------------------------------------------

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


// ================================Constants ========================================
const inputfeild = document.getElementById("email1");
const password1 = document.getElementById("password1");
const button = document.getElementById("submitbtn");
// const message = document.getElementById("message");
const show_button = document.getElementById("show");

// const signedinuser = [];
// let output = [];

function save(users) {
  localStorage.setItem("signedinusers", JSON.stringify(users));
}


// =====================================================Event Handler =====================================
button.addEventListener("click", (event) => {

  event.preventDefault();

  let userval = inputfeild.value.trim();
  let userpass = password1.value.trim();

  if (userval === "") {
    showToast("Email Required ❌");
    return;
  }

  if (userpass === "") {
    showToast("Passwrod Required ❌");
    return;
  }

  let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailpattern.test(userval)) {
    showToast("Invalid Email Pattern❌");
    return;
  }

  if (userpass.length < 9) {
    showToast("Invalid Password lenght❌");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let existinguser = users.find(
    (u) => u.username === userval);


  if (!existinguser) {
    showToast("User not found❌")
    return;
    
  }

  if (existinguser.password !== userpass){
    showToast("Incorrect password❌");
    return;
  }

  localStorage.setItem("LoggedInUser", JSON.stringify({
    username:existinguser.username,
  }));

  showToast("Login successful 🔓")
  setTimeout(() => {
    location.href = "cart-home.html";
  }, 800);


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



