let currentSlide = 0;

function goToSlide(index) {
    const container = document.getElementById("container");
    container.style.transform = `translateX(-${index * 100}vw)`;
    currentSlide = index;
  
    // 🔄 Mise à jour des points actifs
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }
  

// 🔹 GESTURE POUR MOBILE
let startX = 0;
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(endX - startX);
});

// 🔹 GESTURE POUR SOURIS
let isDragging = false;
let startMouseX = 0;

document.addEventListener("mousedown", (e) => {
  isDragging = true;
  startMouseX = e.clientX;
});

document.addEventListener("mouseup", (e) => {
  if (isDragging) {
    const endMouseX = e.clientX;
    handleSwipe(endMouseX - startMouseX);
    isDragging = false;
  }
});

function handleSwipe(deltaX) {
    if (deltaX < -50 && currentSlide < 2) {
        goToSlide(currentSlide + 1);
      } else if (deltaX > 50 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
      
}
