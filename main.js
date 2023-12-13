var imgContainer = document.getElementById("imgContainer");
var collageContainer = document.getElementById("collage");
var s2Container = document.getElementById("s2");
var necklaceSection = document.getElementById("necklaceSection");
var perfumeSection = document.getElementById("perfumeSection");

var tgt= document.getElementById("fisrtPage");

var x = window.matchMedia("(max-width: 767px)")

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



function changeLayout(x){
  if (x.matches) {
    tgt.classList.remove("text");
    tgt.classList.remove("left");
    tgt.classList.remove("big");
    tgt.classList.add("bold");
    tgt.style.paddingTop = "40%";
    imgContainer.innerHTML = "<img src='src/img/asset-1.png' alt='1' width='1000' width='1200'>";
    perfumeSection.style.display = "block";
    s2Container.style.display = "block";
    necklaceSection.style.display = "block";
    collageContainer.style.display = "block";
    col.tabIndex
    perfumeSection.firstElementChild.remove();
    perfumeSection.innerHTML = `<div class="text center big" > 
    <p style="margin-top:10%;max-width:50%;">The classic glass flacon features elegant, clean lines with a monochromatic white label and chic black lettering. Leguéreau was inspired by the perfume decanter’s beloved design and envisioned a magnificent necklace that shared its silhouette.<br>
      <br>
      To create a visual impact worthy of the fragrance’s culture-defining legacy, Leguéreau had the idea for an impeccable, Flawless Type IIa 55.55-carat center diamond.
    </p>
    </div><img src="src/img/asset-4.png" alt="chanel" width="1110" height="1521">`

    collageContainer.innerHTML = `<div>
  <img src="src/img/asset-6.png" alt="chanel" width="772" height="1165">
</div>
    <div><img src="src/img/asset-9.png" alt="chanel" width="522" height="344">
  <img src="src/img/asset-10.png" alt="chanel" width="522" height="344">
</div>
<div>
  <img src="src/img/asset-7.png" alt="chanel" width="306" height="460">
  <img src="src/img/asset-8.png" alt="chanel" width="502" height="503">
</div>";`
  }
}

changeLayout(x)