"use strict";
let  menuBtn=document.querySelector(".menu-btn-container");
let menu=document.querySelector(".menu")
menuBtn.addEventListener("click",function(){
   menu.classList.toggle("show")
})




function menuBtnAnimation(elem) {
    elem.classList.toggle("change");
  }
