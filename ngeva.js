const navLinks = document.getElementById("check");
function toggleMenu() {
  navLinks.classList.toggle("check");
}

// function togglelienActive() {
//   const Links = document.getElementsByTagName("a");
//   Links.classList.toggle("active");
// }

// const Links = document.getElementsByTagName("a");

// for (let i = 0; i < Links.length; i++) {
//   Links[i].addEventListener('click', () =>{
//     navLinks.classList.toggle("check");
//   })
// }

const section = document.getElementsByClassName("section1")[0];

const card = document.getElementsByClassName("card")[0];

function Contact() {
  
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./contact.html");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      section.innerHTML = xhr.responseText;
      section.style.display = "block";
  //     const contact = document.getElementsByClassName("contact")[0];
  // contact.style.transform = "scale(1)";
    }
  };

  xhr.send(null);
}
function Apropos() {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./apropos.html");

  xhr.onreadystatechange = function () {
    // .style.transform = "scale(1)";
    if (xhr.readyState == 4 && xhr.status == 200) {
      section.innerHTML = xhr.responseText;
      section.style.display = "flex";
      // const apropos = document.getElementsByClassName("apropos")[0];
      // apropos.style.transform = "scale(1)";
    }
  };

  xhr.send(null);
}

function Services() {
 
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "./service.html");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      section.innerHTML = xhr.responseText;
      section.style.display = "flex";
      navLinks.classList.toggle("check2");
      // const service = document.getElementsByClassName("services")[0];  
      // service.style.transform = "scale(0.1)"
    }
  };

  xhr.send(null);
}
