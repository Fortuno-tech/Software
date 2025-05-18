// var body = document.getElementById("body");

// const navLinks = document.getElementById("check");
// function toggleMenu() {
//   navLinks.classList.toggle("check");
//   const SG = document.getElementsByClassName("section_Gauche")[0];
//   if (body.offsetWidth <= 970) {
//     if (navLinks.className == "check") {
//       SG.style.left = "0%";
//       SG.style.position = "";
//     } else {
//       SG.style.left = "-100%";
//       //   SG.style.position = "fixed";
//     }
//   } else if (body.offsetWidth > 970) {
//     navLinks.className = "";
//     alert("ok");
//   }
// }
// document.getElementById("menu").addEventListener("click", () => {});

document.addEventListener('DOMContentLoaded', function() {
    const check = document.getElementById("check");
    const sectionGauche = document.getElementById("sectionGauche");
    const body = document.getElementById("body");
    
    // Toggle menu on checkbox change
    check.addEventListener('change', function() {
        if (this.checked) {
            sectionGauche.classList.add('active');
        } else {
            sectionGauche.classList.remove('active');
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 970 && 
            !e.target.closest('.section_Gauche') && 
            !e.target.closest('.checkbtn') &&
            !e.target.closest('#check')) {
            check.checked = false;
            sectionGauche.classList.remove('active');
        }
    });
    
    // Adjust menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 970) {
            check.checked = false;
            sectionGauche.classList.remove('active');
            sectionGauche.style.left = '';
        }
    });
  });

  //changement d'image aléatoire
  const image = [
    "Images/Décoration moderne et épurée dans véranda.jfif",
    "Images/Master Bedrooms Decor Modern Storage.jfif",
    "Images/téléchargement.jfif",
];
//fonction pour l'image aleatoire
function avoir_image_alea(current_image){
    let nouveau_image;
     do {
            const random_image = Math.floor(Math.random() * image.length);
            nouveau_image = image[random_image];
        } while (nouveau_image === current_image && image.length > 1);
            return nouveau_image;
    }
    
 // Afficher une image aléatoire au chargement de la page 
window.onload = function() {
    const imageElement = document.getElementById('randomImage');
    imageElement.src = avoir_image_alea("");
    }