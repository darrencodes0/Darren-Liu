const sliders = {
  slider1: { currentIndex: 0 },
  slider2: { currentIndex: 0 },
  slider3: { currentIndex: 0 }
};

function slide(direction, sliderId) {
  const slider = sliders[sliderId]; 
  const imagesContainer = document.querySelector(`#${sliderId} .slider-images`);
  const images = document.querySelectorAll(`#${sliderId} .slider-images img`);
  const totalImages = images.length;

  slider.currentIndex += direction;

  if (slider.currentIndex < 0) {
    slider.currentIndex = totalImages - 1;
  } else if (slider.currentIndex >= totalImages) {
    slider.currentIndex = 0;
  }

  const containerWidth = imagesContainer.parentElement.clientWidth;
  const offset = -slider.currentIndex * containerWidth;
  imagesContainer.style.transform = `translateX(${offset}px)`;
}

window.addEventListener('resize', () => {
  for (const sliderId in sliders) {
    const slider = sliders[sliderId];
    const imagesContainer = document.querySelector(`#${sliderId} .slider-images`);
    const containerWidth = imagesContainer.parentElement.clientWidth;
    const offset = -slider.currentIndex * containerWidth;
    imagesContainer.style.transform = `translateX(${offset}px)`;
  }
});
