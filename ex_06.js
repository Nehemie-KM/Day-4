document.addEventListener("DOMContentLoaded",function(){

window.addEventListener("resize", function(){
  alert("Size matters")
})
let para = document.querySelector('img[src="../Iphone22.png"]')

if (para){ 

  para.addEventListener("mouseover", function(){ 
    alert("Pretty, isn't it?")
  }  )
}
})