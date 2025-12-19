// ------------------ Constants  ---------------------------------
const row1 = document.getElementById("row1")
const showdiv = document.querySelector(".catogries")
const catbtn = document.getElementById("dropdown-button")

// ------------------ Products ; ------------------------
const products = [
  { id: 1, name: "S25 Ultra",       image: "Images/cart-pic2.jpg", price: 2000, category: "mobile" },
  { id: 2, name: "Iphone 15",       image: "Images/cart-pic2.jpg", price: 1000, category: "mobile" },
  { id: 3, name: "Redmi 13",        image: "Images/cart-pic2.jpg", price: 900, category: "mobile" },
  { id: 4, name: "Poco x3",         image: "Images/cart-pic2.jpg", price: 500, category: "mobile" },
  { id: 5, name: "Xpro magic",      image: "Images/cart-pic2.jpg", price: 3000, category: "laptop" },
  { id: 6, name: "Mackbook pro",    image: "Images/cart-pic2.jpg", price: 2000, category: "laptop" },
  { id: 7, name: "legion x3",       image: "Images/cart-pic2.jpg", price: 1500, category: "laptop" },
  { id: 8, name: "Watch Ultra 5",   image: "Images/cart-pic2.jpg", price: 200, category: "watch" },
  { id: 9, name: "Samsung gear S3", image: "Images/cart-pic2.jpg", price: 200, category: "watch" },
  { id: 10, name: "Xiaomi 3",       image: "Images/cart-pic2.jpg", price: 190, category: "watch" }
]

// ------------------ Cart Localstorage -------------------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || []
let currentlist = products

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// ------------------------------------- Render Function ------------------
function renderProducts(list) {
  row1.innerHTML = ""

  list.forEach(product => {
    const item = cart.find(c => c.id === product.id)

    row1.innerHTML += `
      <div class="obj-col">
        <img src="${product.image}" width="170" height="112">
        <h5>${product.name}</h5>
        <p>$${product.price}</p>

        ${
          item
            ? `
              <div class="controls">
                <button class="minus" data-id="${product.id}">-</button>
                <span class="qty">${item.quantity}</span>
                <button class="plus" data-id="${product.id}">+</button>
              </div>
            `
            : `
              <div class="cart-btn-container"> 
              <button class="cart-btn"  data-id="${product.id}"> Add to cart</button></div>
            `
        }
      </div>
    `
  })
}

// --------------------------------- Event Handlers----------------------
row1.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id)
  if (!id) return

  // Add to cart logic: 
  if (e.target.classList.contains("cart-btn")) {
    const product = products.find(p => p.id === id)
    cart.push({ ...product, quantity: 1 })
  }

  // Plus logic 
  if (e.target.classList.contains("plus")) {
    cart.find(item => item.id === id).quantity++
  }

  // Minus logic
  if (e.target.classList.contains("minus")) {
    const item = cart.find(item => item.id === id)
    item.quantity--

    if (item.quantity === 0) {
      cart = cart.filter(i => i.id !== id)
    }
  }

  saveCart()
  renderProducts(currentlist)
})

// --------------------------------- Filter function ------------------
showdiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("mobile")) {
    currentlist = products.filter(p => p.category === "mobile")
  }
  if (e.target.classList.contains("laptop")) {
    currentlist = products.filter(p => p.category === "laptop")
  }
  if (e.target.classList.contains("watch")) {
    currentlist = products.filter(p => p.category === "watch")
  }
  if (e.target.classList.contains("all")) {
    currentlist = products
  }

  renderProducts(currentlist)
})

// -------------------------- dropdown toggle fucntion  ------------------
catbtn.addEventListener("click", () => {
  showdiv.classList.toggle("show")
})

// ------------------------- Initital Render ------------------
renderProducts(currentlist)


