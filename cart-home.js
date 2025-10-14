// ----------------------------------Constants

const row1 = document.getElementById("row1")
const mobile = document.querySelector(".mobile")

// dropdown  toggle ----------------
const showdiv = document.querySelector(".catogries")
const catbtn = document.getElementById("dropdown-button")

// --------------------------------------Products---------------
const products = [
                    {id:1 , name:"S25 Ultra",            image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:2 , name:"Iphone 15",            image: "Images/cart-pic2.jpg", price:1000,  category:"mobile"},
                    {id:3 , name:"Redmi 13",             image: "Images/cart-pic2.jpg", price:900,  category:"mobile"},
                    {id:4 , name:"Poco x3",              image: "Images/cart-pic2.jpg", price:500,  category:"mobile"},
                    {id:5 , name:"Xpro magic",           image: "Images/cart-pic2.jpg", price:3000,  category:"laptop"},
                    {id:6 , name:"Mackbook pro",         image: "Images/cart-pic2.jpg", price:2000,  category:"laptop"},
                    {id:7 , name:"legion x3",            image: "Images/cart-pic2.jpg", price:1500,  category:"laptop"},
                    {id:8 , name:"Watch Ultra 5 ",       image: "Images/cart-pic2.jpg", price:200,  category:"watch"},
                    {id:9 , name:"Samsung gear S3",      image: "Images/cart-pic2.jpg", price:200,  category:"watch"},
                    {id:10, name:"Xioami 3 ",            image: "Images/cart-pic2.jpg", price:190,  category:"watch"}
];

// Local storage functions and setter and getter --------------;

const cart = JSON.parse(localStorage.getItem("cart")) || [];
// const cart = []

// let users = JSON.parse(localStorage.getItem("users")) || [];

function save(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}


// --------------------------------------display function---------------

function display(products){
    // const mobile = products.filter(item => item.category === "mobile")
    products.forEach((product) =>
    {
        const productContainer = document.createElement("div");
        productContainer.className = "obj-col";

        productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="170px"  height="112px"/>
            <h5>${product.name}</h5>    
            <p>Rs.$${product.price.toFixed(2)}</p>
            <div class="cart-btn-container"> <button class="cart-btn"  data-id="${product.id}">Add to cart</button></div>
            `

        row1.appendChild(productContainer)

});    
}
display(products)

// --------------------------------------Render Function ---------------

function display_render() {
  row1
    .querySelectorAll(".obj-col")
    .forEach((item) => item.remove());
}


//  DROp down menu click checker and function  : ---------------------------------

showdiv.addEventListener("click", (event)=>{
    if(event.target.classList.contains("mobile")){
        // console.log("clicked" , event.target);
        const mobile = products.filter(item => item.category === "mobile")
        display_render()
        display(mobile)
        // dropdowntoggle(mobile)
        
    }

    else if (event.target.classList.contains("all")){
        // console.log("clicked" , event.target);
        display_render()
        display(products)
    }
    
    else if (event.target.classList.contains("laptop")){
        // console.log("clicked" , event.target);
        const laptop = products.filter(item => item.category === "laptop")
        display_render()
        display(laptop)
    }

    else if (event.target.classList.contains("watch")){
        // console.log("clicked" , event.target);
        const watch = products.filter(item => item.category === "watch")
        display_render()
        display(watch)
    }

    
});

// Add to cart function  --------------------------
row1.addEventListener("click", (event)=>{
    if(event.target.classList.contains("cart-btn")){

        const productid = parseInt(event.target.dataset.id)

        const product = products.find((item)=> item.id === productid)
        const existingitem =  cart.find((item)=> item.id === productid)
  
        // console.log("ID == ",productid)
        if(existingitem){
            existingitem.quantity += 1;
            // console.log(cart)
            
            
        }
        else{
            cart.push({ ...product, quantity: 1 });
        }
        
        save(cart)

    }
});

// function addtocart(){

// }





// Dropdown toggle --------------------------

catbtn.addEventListener("click", ()=>{

    showdiv.classList.toggle("show");


});


