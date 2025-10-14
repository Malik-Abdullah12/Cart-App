const main = document.getElementById("cart-container")

const cartitem = JSON.parse(localStorage.getItem("cart")) || [];

function save(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function displaycart(item){
    main.innerHTML = ""
    item.forEach((item) =>
         {

        const cartContainer = document.createElement("div");
        cartContainer.className = "item-container";

        cartContainer.innerHTML = `
                            <h2>Cart</h2>

  <div class="obj-col">
    <div>
      <h5>${item.name}</h5>
      <p>${item.name}</p>
    </div>

    <div class="cart-btn-container">
      <button class="minus" data-id="${item.id}">-</button>
      <input type="text" value="${item.quantity}" readonly>
      <button  class="plus" data-id="${item.id}">+</button>
      <span class="price">$${item.price.toFixed(2)}</span>
      <button class="delete-btn">Delete</button>
    </div>

    <div style="color:#5b7bfa;">Rs.275500</div>
  </div>
        `


        main.appendChild(cartContainer)

        
    });

    addbuttons();
}

// displaycart(cartitem)

function addbuttons(){
    const plus = document.querySelectorAll(".plus")
    const minus = document.querySelectorAll(".minus")


plus.forEach(item =>
     {
        item.addEventListener("click",(event)=>{
            const productid = parseInt(event.target.dataset.id)
            const item = cartitem.find((item)=> item.id === productid)

            if(item){
                item.quantity += 1 ;
                save(cartitem)
                displaycart(cartitem)
                
            }



        })
});
}

displaycart(cartitem)


