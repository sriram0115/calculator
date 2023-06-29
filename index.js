let resultel=document.getElementById("result")
let num=document.querySelectorAll("#n")
let equalto=document.getElementById("equal")
let clearall=document.getElementById("clear")
let dltbtn=document.getElementById("dlt")
num.forEach((num) => {
    num.addEventListener("click",insert)
})
    function insert(e){
        let newone=e.target.textContent
        resultel.value+=newone
    }

     

    

equalto.addEventListener("click",function(){
    resultel.value=eval(resultel.value)
})
clearall.addEventListener("click",clr)
function clr(){
    window.location.reload()
}
dltbtn.addEventListener("click",function(){
    resultel.value=resultel.value.slice(0,-1)
})
