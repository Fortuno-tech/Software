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



// -- Script Fortico Navigation + Sections
const navLinks = document.querySelectorAll('.nav-buttons a');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Supprimer la classe "active" et remettre les images par défaut
    navLinks.forEach(l => {
      l.classList.remove('active');
      const img = l.querySelector('img');
      if (img) img.src = img.getAttribute('data-default');
    });

    // Ajouter "active" au lien cliqué + changer image
    link.classList.add('active');
    const img = link.querySelector('img');
    if (img) img.src = img.getAttribute('data-active');

    // Masquer toutes les sections
    sections.forEach(section => section.style.display = 'none');

    // Afficher la section cible
    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'flex'; // ou 'block' selon ton layout
    }
  });
});


// -- Script Horloge Date
function updateDateTime() {
  const jours = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
  const mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
                'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  const now = new Date();
  const jourAbbr = jours[now.getDay()];
  const heure = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const jourNum = now.getDate();
  const moisNom = mois[now.getMonth()];

  document.getElementById("time-date").innerHTML = `${jourNum} ${moisNom}<br>${jourAbbr} ${heure}:${minute}`;
}
updateDateTime();
setInterval(updateDateTime, 60000);


// -- Script Météo OpenWeatherMap
const apiKey = "b08faa524136fbdd26068e4faf0f73ee";
const city = "Tamatave,MG";

async function fetchWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    const response = await fetch(url);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const weatherMain = data.weather[0].main.toLowerCase();

    document.getElementById("temp").textContent = `${temp}°C`;
    document.getElementById("humidity").textContent = `${humidity}%`;

    const rainValue = data.rain && data.rain["1h"] ? `${data.rain["1h"]}mm` : "0mm";
    document.getElementById("weather-value").textContent = rainValue;

    const iconMap = {
      "clear": "/Icones/icons8-soleil-100.png",
      "clouds": "/Icones/icons8-nuage-100.png",
      "rain": "/Icones/icons8-pluie-100.png",
      "drizzle": "/Icones/icons8-pluie-100.png",
      "thunderstorm": "/Icones/icons8-orage-100.png"
    };
    document.getElementById("weather-img").src = iconMap[weatherMain] || "/Icones/icons8-nuage-100.png";
  } catch (err) {
    console.error("Erreur météo :", err);
  }
}
fetchWeather();


// Script pour ajout apparéil











const buttons = document.querySelectorAll('.nav-link_devis');
const sections1 = document.querySelectorAll('.section-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    // Cacher toutes les sections
    sections1.forEach(section => section.classList.remove('active'));

    // Afficher la section ciblée
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // Gérer les classes actives pour les boutons (facultatif)
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Détail éclairage

function showDetail(button) {
const targetId = button.getAttribute('data-target');

// Masquer toutes les sections
document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));

// Afficher la section cible
document.getElementById(targetId).classList.add('active');
}

function goBack() {
// Masquer toutes les sections
document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));

// Réafficher la liste des modules
document.getElementById('section-Eclairage').classList.add('active');
}
function goBackM1() {
// Masquer toutes les sections
document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));

// Réafficher la liste des modules
document.getElementById('detail-m1').classList.add('active');
}
function goBackM11() {
  // Masquer toutes les sections
  document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
  
  // Réafficher la liste des modules
  document.getElementById('detail-m1-2').classList.add('active');
  }
function goBackM2() {
  // Masquer toutes les sections
  document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
  
  // Réafficher la liste des modules
  document.getElementById('detail-m1-1').classList.add('active');
  }

// Fonction pour voir le mot de passe
function togglePassword() {
const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

if (passwordInput.type === "password") {
  passwordInput.type = "text";
  eyeIcon.src = "Icones/cacher.png"; // Icône œil barré
} else {
  passwordInput.type = "password";
  eyeIcon.src = "Icones/eye.png"; // Icône œil
}
}




  const image = [
    "/Images/fortico.png",
    "/Images/home.jpg",
    "/Images/pub.jpg",
  ];

  function avoir_image_alea(current_image) {
    let nouveau_image;
    do {
      const random_index = Math.floor(Math.random() * image.length);
      nouveau_image = image[random_index];
    } while (nouveau_image === current_image && image.length > 1);
    return nouveau_image;
  }

  function mettre_a_jour_image() {
    const imageElement = document.getElementById('randomImage');
    const current = imageElement.src.split('/').pop();
    
    // Créer un nouvel élément image temporaire
    const nouvelleImage = new Image();
    nouvelleImage.src = avoir_image_alea(current); // Sélectionne la nouvelle image
    
    // Quand la nouvelle image est complètement chargée
    nouvelleImage.onload = () => {
      // Commence par fondre l'image actuelle
      imageElement.style.opacity = 0;
  
      setTimeout(() => {
        // Change la source de l'image affichée
        imageElement.src = nouvelleImage.src;
  
        // Une fois l'image visible, la faire réapparaître
        imageElement.style.opacity = 1;
      }, 300); // petit délai pour le fondu
    };
  }
  
  

  // Au chargement de la page
  window.onload = mettre_a_jour_image;

  // À chaque fois qu'on clique sur "Accueil"
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      if (targetId === 'content-section') {
        mettre_a_jour_image(); // Changer l'image
      }
    });
  });

