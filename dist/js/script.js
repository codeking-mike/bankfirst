const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener("click", () =>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  slides.forEach(slide => {
    slide.style.opacity = 0;
  });
  slides[index].style.opacity = 1;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3; // 3 is the number of slides
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3; // 3 is the number of slides
  showSlide(currentSlide);
}
