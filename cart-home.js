const row1 = document.getElementById("row1")


// dropdown  toggle ----------------
const showdiv = document.querySelector(".catogries")
const catbtn = document.getElementById("dropdown-button")


const products = [
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"},
                    {id:1 , name:"S25 Ultra", image: "Images/cart-pic2.jpg", price:2000,  category:"mobile"}
];

products.forEach((product) =>
    {
        const productContainer = document.createElement("div");
        productContainer.className = "obj-col";

        productContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="170px"  height="112px"/>
            <h5>${product.name}</h5>    
            <p>Rs.$${product.price.toFixed(2)}</p>
            <div class="cart-btn-container"> <button class="cart-btn">Add to cart</button></div>
            `

        row1.appendChild(productContainer)

});


// row1.innerHTML = values

// console.log(values)
// console.log(products)


// function displayproducts(){


    // row1.innerHTML = `
    //                     <div class="obj-col">
    //                         <img> ${products.image}</img>
    
    //                     </div>
    
    // `


// }

// displayproducts()


// let list = [1,3,4]

// let data = list.forEach((val)=>{
//     console.log(val)
// }
// )

// console.log(data)



// Dropdown toggle --------------------------

catbtn.addEventListener("click", ()=>{

    showdiv.classList.toggle("show");


});


