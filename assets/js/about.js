const marqueeSlider = document.querySelector('.marquee-slider');
const marqueeContent = marqueeSlider.querySelector('.marquee-content');
let isDragging = false;
let startX = 0;
let initialTransform = 0;

marqueeSlider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  initialTransform = parseInt(getComputedStyle(marqueeContent).transform.replace('translateX(', '').replace('px)', ''));
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = startX - e.clientX;
    marqueeContent.style.transform = `translateX(${initialTransform + deltaX}px)`;
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
  }
});