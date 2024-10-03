document.addEventListener("DOMContentLoaded",function(){

    
        document.querySelector(".cart-btn").innerHTML = " CHANGE COLOR "
    function parara(){ 
 let lololo = '#' + Math.floor(Math.random() * 1425757358).toString(16)
document.body.style.backgroundColor = lololo
    }
    document.querySelector(".cart-btn").addEventListener("click",parara)
}) 