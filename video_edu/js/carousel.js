console.log('check');

const carouselArea = document.querySelector('.carousel_wrapper');
const iconsArea = carouselArea.querySelector('.icons_wrapper');
let iconsList = iconsArea.querySelectorAll('.icon');
console.log(iconsList);
const arrowRight = carouselArea.querySelector('.arrow-right');
const arrowLeft = carouselArea.querySelector('.arrow-left');

arrowRight.addEventListener('click', () => {
  const newElement = iconsList[2].cloneNode(true);
  newElement.classList.add('move-left');
  console.log(newElement);
  iconsArea.insertBefore(newElement, iconsList[0]);
  iconsList = iconsArea.querySelectorAll('.icon');
  // iconsList[0].classList.add('move-left');
  console.log(iconsList);
  setTimeout(() => {
    iconsList[0].classList.remove('move-left');
    iconsList[1].classList.add('active');
    iconsList[2].classList.remove('active');
    setTimeout(() => {
      iconsList[3].remove();
      iconsList = iconsArea.querySelectorAll('.icon');
      console.log(iconsList);
    }, 500);
  }, 30);
});

arrowLeft.addEventListener('click', () => {
  iconsArea.appendChild(iconsList[0].cloneNode(true));
  iconsList[0].classList.add('move-left');
  iconsList[1].classList.remove('active');
  iconsList[2].classList.add('active');
  iconsList = iconsArea.querySelectorAll('.icon');
  console.log(iconsList);
  setTimeout(() => {
    iconsList[0].remove();
    iconsList = iconsArea.querySelectorAll('.icon');
    console.log(iconsList);
  }, 500);
});
