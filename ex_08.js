

    
    document.addEventListener("DOMContentLoaded",function(){
 
        document.getElementById("description").innerHTML = "<p>Never miss that perfect shot again.<p><p>Designed to revolutionise video and photography, with beyond cinematic 16K resolution.<p><p>Get yours now !<p> "
        let par =   document.getElementById("tag")
        par.remove()
document.getElementById("price").textContent = "890€"
document.getElementById("productName").textContent = "Samsung 22"
let pho = document.querySelector('img[src="../Iphone22.png"]')
pho.src = "Samsung22.png"
let cartCount = 0;
 
const cartCountElement = document.createElement("p");
cartCountElement.textContent = `In cart: ${cartCount}`;

const addToCartContainer = document.getElementById("addToCart");
addToCartContainer.parentNode.insertBefore(cartCountElement, addToCartContainer.nextSibling);


document.querySelector(".cart-btn").addEventListener("click", function() {
    cartCount++;
        cartCountElement.textContent = `In cart: ${cartCount}`;
    });
    })
   