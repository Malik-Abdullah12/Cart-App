let LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))

if(!LoggedInUser){
  window.location.href = "index.html";
}

let btn = document.getElementById("shopping-btn")

btn.addEventListener("click",()=>{
    localStorage.removeItem("cart")
    setTimeout(() => {
        location.href= "cart-home.html"
        
    }, 800);
})