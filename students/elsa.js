var section = document.querySelector("section.experiments");
section.classList.add("hidden");
var button = document.querySelector("button");
button.addEventListener("click",function(){
  section.classList.toggle("hidden");
})
