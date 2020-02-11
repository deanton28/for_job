console.log('check');

const carouselArea = document.querySelector('.carousel_wrapper');
const iconsArea = carouselArea.querySelector('.icons_wrapper');
let iconsList = iconsArea.querySelectorAll('.icon');
console.log(iconsList);
const arrowRight = carouselArea.querySelector('.arrow-right');
const arrowLeft = carouselArea.querySelector('.arrow-left');

arrowRight.addEventListener('click', () => {
  iconsArea.querySelector('.active').classList.remove('active');
  iconsArea.insertBefore(iconsList[2], iconsList[0]);
  iconsList = iconsArea.querySelectorAll('.icon');
  console.log(iconsArea);
  iconsList[1].classList.add('active');
});

arrowLeft.addEventListener('click', () => {
  iconsArea.querySelector('.active').classList.remove('active');
  iconsArea.appendChild(iconsList[0]);
  iconsList = iconsArea.querySelectorAll('.icon');
  console.log(iconsArea);
  iconsList[1].classList.add('active');
});
