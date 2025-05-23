// Profil pic and save
const upload = document.getElementById('upload');
    const profilePic = document.getElementById('profile-pic');
    // Charger l'image du localStorage si elle existe
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      profilePic.src = savedImage;
    }

    // Quand une image est importée
    upload.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imageData = e.target.result;
          profilePic.src = imageData;
          localStorage.setItem('profileImage', imageData); // Enregistrer dans le navigateur
        }
        reader.readAsDataURL(file);
      }
    });
//**
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
  function goBackM12() {
    // Masquer toutes les sections
    document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
    
    // Réafficher la liste des modules
    document.getElementById('detail-m1-1').classList.add('active');
    }
  function goBackM14() {
    // Masquer toutes les sections
    document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
    
    // Réafficher la liste des modules
    document.getElementById('detail-m1-4').classList.add('active');
    }
function goBackM2() {
  // Masquer toutes les sections
  document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
  
  // Réafficher la liste des modules
  document.getElementById('detail-m1-3').classList.add('active');
  }
  function showDetailM1() {
    // Masquer toutes les sections
    document.querySelectorAll('.section-content').forEach(el => el.classList.remove('active'));
    
    // Réafficher la liste des modules
    document.getElementById('detail-m1').classList.add('active');
    }
// Fonction pour voir le mot de passe
function togglePassword(eyeIcon) {
  const targetId = eyeIcon.getAttribute("data-target");
  const passwordInput = document.getElementById(targetId);

  if (!passwordInput) return;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "Icones/cacher.png";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "Icones/eye.png";
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

// pour empecher connexion

  const ssidInput = document.getElementById("ssid");
  const passwordInput = document.getElementById("password1");
  const connectButton = document.getElementById("connectBtn");

  function checkInputs() {
    const ssidFilled = ssidInput.value.trim() !== "";
    const passwordFilled = passwordInput.value.trim() !== "";
    connectButton.disabled = !(ssidFilled && passwordFilled);
  }

  ssidInput.addEventListener("input", checkInputs);
  passwordInput.addEventListener("input", checkInputs);



  function togglePassword(icon) {
    const targetId = icon.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.src = isPassword ? "Icones/eye-off.png" : "Icones/eye.png";
  }


  let switchCount = 1;

  function addSmartSwitch() {
    switchCount++;
    const container = document.getElementById("containerPair");

    const newBox = document.createElement("div");
    newBox.className = "box-rounded1";
    newBox.innerHTML = `
      <div class="top-section">
        <img src="/Icones/icons8-lumière-100.png" class="icon-light" />
        <label class="switch">
          <input type="checkbox" onclick="publishMQTT(this)" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="bottom-section">
        <div class="texts">
          <p class="p1">Light</p>
          <h3 class="p2 module-title">SmartSwitch-${String(switchCount).padStart(3, '0')}</h3>
        </div>
        <button class="more-btn">...</button>
      </div>
    `;

    const addButton = container.querySelector(".box-rounded2");
    container.insertBefore(newBox, addButton);
  }



  