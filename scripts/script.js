//dom
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let navbghandler = document.querySelector(".bg-handler");


btn.addEventListener("click" , () => {
   if(input.value === ""){
      input.style.border = "solid 1px red";
   } else {
      input.style.border = "";
   }
})
 /***/
let sections = document.querySelectorAll(".intersection");
let observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         entry.target.classList.remove("opacity-0");
         entry.target.classList.remove("translate-y-[100px]");
      } else {
         entry.target.classList.add("opacity-0")
         entry.target.classList.add("translate-y-[100px]")
      }
   })
})
sections.forEach(sect => {
   observer.observe(sect);
});
