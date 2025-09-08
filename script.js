function toggleMenu() {
  document.getElementById('navbar').classList.toggle('show');
}

// Notice Slider Script
const slides = document.querySelectorAll('#noticeSlider div');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);
