var btn = document.getElementsByClassName("btn");
var i;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function collapseMenu(){
 btn[0].classList.toggle("active");
    var content = btn[0].nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
}
collapseMenu();
