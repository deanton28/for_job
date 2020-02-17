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
  iconsArea.appendChild(iconsList[0].cloneNode(true));
  setTimeout(() => {
    iconsList = iconsArea.querySelectorAll('.icon');
    iconsArea.querySelector('.active').classList.remove('active');
    for (let i = 0; i < iconsList.length; i += 1) {
      iconsList[i].classList.add('move-left');
    }
    iconsList[2].classList.add('active');
  }, 1000);
});
