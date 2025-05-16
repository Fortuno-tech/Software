const next = document.getElementById("btn_commencer");

next.addEventListener("click", () => {
  const block_inside2 = document.getElementsByClassName("block_inside2")[0];
  if (block_inside2) {
    block_inside2.style.display = "block";
    next.style.display = "none";
  }
});

let mini_fleche = document.getElementsByClassName("dropdown-arrow");
const info = document.getElementsByClassName("info-box");

for (let j = 0; j < mini_fleche.length; j++) {
  mini_fleche[j].addEventListener("click", () => {

        info[j].classList.toggle("active");
        if (info[j].className == "info-box active") {
            mini_fleche[j].style.transform = "rotate(0deg)" 
        }else{
            mini_fleche[j].style.transform = "rotate(153deg)" 
        }
       
  });
}
