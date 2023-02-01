const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

let index = 0;
let width;

const loadedImage = () => {
  width = slider.clientWidth;
};

window.onload = loadedImage;
window.addEventListener("resize", loadedImage);

const changeSlide = (array, index) => {
  array.forEach((image) => {
    image.style.transform = `translate(${-index * width}px)`;
  });
};

next.addEventListener("click", () => {
  index++;
  changeSlide(images, index);

  if (index === images.length) {
    index = 0;
    changeSlide(images, index);
  }
});

prev.addEventListener("click", () => {
  index--;
  changeSlide(images, index);

  if (index === -1) {
    index = images.length - 1;
    changeSlide(images, index);
  }
});
