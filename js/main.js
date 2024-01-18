"use strict";
let  menuBtn=document.querySelector(".menu-btn-container");
let menu=document.querySelector(".menu")
let allCourse=document.querySelector(".allCourse");
let courses=document.querySelectorAll(".course");

menuBtn.addEventListener("click",function(){
   menu.classList.toggle("show")
})
if(window.innerWidth<600){
   allCourse.classList.remove("hidden")
   for(let i=4;i<courses.length;i++){
      courses[i].classList.add("hidden")
   }
}
allCourse.addEventListener("click",function(){
   for(let i=4;i<courses.length;i++){
      courses[i].classList.remove("hidden")
   }
})



function menuBtnAnimation(elem) {
    elem.classList.toggle("change");
  }
