let LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"))

if(!LoggedInUser){
  window.location.href = "index.html";
}


const main = document.getElementById("cart-container")

let cartitem = JSON.parse(localStorage.getItem("cart")) || [];

const total = document.getElementById("total")

function save(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ============================Total Price function========================
function TotalPrice(cart){
  let sum = 0
  cart.forEach((item)=>{
    sum += item.price * item.quantity
    
  })

  total.innerHTML = `
    Total : $${sum.toFixed(2)}`
}

// =========================Signout Function  ============================
let signout = document.getElementById("sign-out-link")
signout.addEventListener("click",()=>{
  localStorage.removeItem("LoggedInUser")
  showToast("Signing Out")
  setTimeout(() => {
    location.href = "index.html"
  }, 800);
});

//-----------------------Toastify function --------------------------
function showToast(message, bg = "#00b09b") {
  Toastify({
    text: message,
    duration: 2000,
    gravity: "bottom",
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

// ================================================Display Function==========================
function displaycart(item){
    main.innerHTML = "<h2>Cart</h2>"

    if(item.length===0){
      main.innerHTML  += "Cart is empty"
      TotalPrice(item)
      return
    }

    item.forEach((item) =>
         {

     main.innerHTML += `
      <div class="item-container">
        <div class="obj-col">
          <div>
            <h5>${item.name}</h5>
            <p>${item.category}</p>
          </div>

          <div class="cart-btn-container">
            <button class="minus" data-id="${item.id}">-</button>
            <input type="text" value="${item.quantity}" readonly>
            <button class="plus" data-id="${item.id}">+</button>
            <span class="price">$${item.price.toFixed(2)}</span>
            <button class="delete-btn" data-id="${item.id}"></button>
          </div>

          <div style="color: var(--neon);">
            $${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    `
        
    });

    TotalPrice(item)
}


main.addEventListener("click" ,(e)=>{
  const id = parseInt(e.target.dataset.id)
  if (!id) return

  const item = cartitem.find((i)=> i.id === id)
  if(!item) return

  if(e.target.classList.contains("plus")){
    item.quantity++;
  }

  if(e.target.classList.contains("minus")){
    item.quantity--;
    if(item.quantity===0){
      cartitem = cartitem.filter((i)=> i.id !== id)
    }
  }
  
  if(e.target.classList.contains("delete-btn")){
     cartitem = cartitem.filter((i)=> i.id !== id)
   }

  save(cartitem)
  displaycart(cartitem)

})

displaycart(cartitem)



