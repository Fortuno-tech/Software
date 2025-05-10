var body = document.getElementById("body");

const navLinks = document.getElementById("check");
function toggleMenu() {
  navLinks.classList.toggle("check");
  const SG = document.getElementsByClassName("section_Gauche")[0];
  if (body.offsetWidth <= 970) {
    if (navLinks.className == "check") {
      SG.style.left = "0%";
      SG.style.position = "";
    } else {
      SG.style.left = "-100%";
      //   SG.style.position = "fixed";
    }
  } else if (body.offsetWidth > 970) {
    navLinks.className = "";
    alert("ok");
  }
}
document.getElementById("menu").addEventListener("click", () => {});
