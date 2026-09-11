// BEFORE & AFTER SLIDER LOGIC
document.addEventListener('DOMContentLoaded', () => {
  let baIndex = 0;
  
  const baSlides = document.querySelectorAll('.ba-slide');
  const baDots = document.querySelectorAll('.ba-dot');
  const prevBtn = document.querySelector('.prev-ba');
  const nextBtn = document.querySelector('.next-ba');

  if (baSlides.length === 0) return;

  function updateBASlider(index) {
    if (index >= baSlides.length) baIndex = 0;
    else if (index < 0) baIndex = baSlides.length - 1;
    else baIndex = index;

    baSlides.forEach(slide => slide.classList.remove('active'));
    baDots.forEach(dot => dot.classList.remove('active'));

    baSlides[baIndex].classList.add('active');
    if (baDots[baIndex]) baDots[baIndex].classList.add('active');
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateBASlider(baIndex + 1));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateBASlider(baIndex - 1));
  }

  baDots.forEach((dot, i) => {
    dot.addEventListener('click', () => updateBASlider(i));
  });
});