var navbar=document.getElementById("nav")
console.log(navbar)
var item=document.getElementsByClassName("smoothscroll")

// for(var i=0;i<=item.length;i++){
//     item[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("current");
//         current[0].className = current[0].className.replace(" current", "");
//         this.className += "current";
//     });
// }   

function click(){
    var element = document.getElementById("item1");
   element.classList.add("current");
   console.log('ji')
}
