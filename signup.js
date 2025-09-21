const show_button = document.getElementById("show1");

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
