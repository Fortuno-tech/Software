const container = document.getElementById('containerPair');
const overlay = document.getElementById('overlay');
const contextMenu = document.getElementById('contextMenu');
const modal = document.getElementById('modalConfig');
const btnCloseModal = document.getElementById('btnClose');

let currentBox = null; // La box où le menu a été ouvert

// Fonction qui ouvre le menu contextuel à la position du clic
function openContextMenu(e, box) {
  e.stopPropagation();
  currentBox = box;

  // Récupérer le bouton "..."
  const btn = box.querySelector('.more-btn');
  const btnRect = btn.getBoundingClientRect();

  contextMenu.style.top = (btnRect.bottom + window.scrollY) + 'px';
  contextMenu.style.left = (btnRect.left + window.scrollX) + 'px';
  contextMenu.style.display = 'block';

  overlay.style.display = 'block';
}


// Gestion du clic sur les boutons "..."
function setupMoreButtons() {
  const buttons = container.querySelectorAll('.more-btn');
  buttons.forEach(btn => {
    btn.onclick = (e) => {
      const box = btn.closest('.box-rounded1');
      openContextMenu(e, box);
    }
  });
}

// Fermer menu et modale au clic sur overlay ou ailleurs
overlay.onclick = closeAll;
document.body.addEventListener('click', () => {
  closeAll();
});

function closeAll() {
  contextMenu.style.display = 'none';
  modal.style.display = 'none';
  overlay.style.display = 'none';
  currentBox = null;
}

// Empêcher fermeture si clic dans menu ou modale
contextMenu.onclick = e => e.stopPropagation();
modal.onclick = e => e.stopPropagation();

// Gestion boutons menu contextuel
document.getElementById('btnPropos').onclick = () => {
  contextMenu.style.display = 'none';

  if (!currentBox) return;

  // Ici on pourrait récupérer dynamiquement les données du module
  // Exemple: récupérer le titre du module affiché
  const title = currentBox.querySelector('.module-title').innerText;
  modal.querySelector('h2').innerText = `Détails du module: ${title}`;

  // Afficher la modale
  modal.style.display = 'block';
};

document.getElementById('btnParam').onclick = () => {
  alert('Fonction Paramètre à implémenter');
};

document.getElementById('btnDelete').onclick = () => {
  if(currentBox) {
    if(confirm('Voulez-vous vraiment supprimer ce module ?')) {
      currentBox.remove();
      closeAll();
    }
  }
};

btnCloseModal.onclick = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};

// Fonction ajout d'un SmartSwitch (exemple)
function addSmartSwitch() {
  const newBox = document.createElement('div');
  newBox.className = 'box-rounded1';
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
        <h3 class="p2 module-title">SmartSwitch-${Date.now()}</h3>
      </div>
      <button class="more-btn">...</button>
    </div>`;
  container.insertBefore(newBox, container.querySelector('.box-rounded2'));

  // Re-bind les boutons ... pour le nouveau
  setupMoreButtons();
}


// Initialisation des boutons
setupMoreButtons();