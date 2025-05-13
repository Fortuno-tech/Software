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
 
  