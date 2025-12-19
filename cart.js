const main = document.getElementById("cart-container")

let cartitem = JSON.parse(localStorage.getItem("cart")) || [];

const total = document.getElementById("total")

function save(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function TotalPrice(cart){
  let sum = 0
  cart.forEach((item)=>{
    sum += item.price * item.quantity
    
  })

  total.innerHTML = `
    Total : $${sum.toFixed(2)}`
}


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
            <button class="delete-btn" data-id="${item.id}">Delete</button>
          </div>

          <div style="color:#5b7bfa;">
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



