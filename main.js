let manuIcon = document.querySelector(".side-manu");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
manuIcon.onclick = function(){
  sidebar.classList.toggle("collapse");
  content.classList.toggle("resize-content");
};