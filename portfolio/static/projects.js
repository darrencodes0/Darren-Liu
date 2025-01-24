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

let dark = true

function toggle_mode(){
  const containers = document.getElementsByClassName("container");
  if(dark == true){
    document.body.style.backgroundColor = "white";
    document.getElementById("project-header").style.background = "black";
    document.getElementById("background-mode-img").src = "../static/images/icons/moon-icon.png";
    document.getElementById("dark-light-button").style.background = "linear-gradient(to left, white, black)";
    for(let i = 0; i < containers.length; i++){
      containers[i].style.background = "black";
    }
  } else{
     document.body.style.backgroundColor = "black";
     document.getElementById("project-header").style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(92, 46, 46))";
     document.getElementById("background-mode-img").src = "../static/images/icons/sun-icon.png"; 
     document.getElementById("dark-light-button").style.background = "linear-gradient(to right, white, rgb(206, 107, 107))";
     for(let i = 0; i < containers.length; i++){
      containers[i].style.background = "linear-gradient(to right, rgb(0, 0, 0), rgb(109, 39, 39))";
    }
  }
  dark = !dark
}