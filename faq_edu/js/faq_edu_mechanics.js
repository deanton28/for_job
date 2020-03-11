const forEach = (array, collback) => {
  for (let i = 0; i < array.length; i += 1) {
    collback(array[i], i);
  }
};

const addElementCircle = (parentElement) => {
  const element = document.createElement('div');
  element.classList.add('circle');
  element.innerHTML = '<div class="circle_circle"><div class="circle_point"></div></div>';
  parentElement.appendChild(element);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

const workPlace = document.querySelector('.faq-edu-wrapper');
const blockList = workPlace.querySelectorAll('.block-name');
const questionBlockList = workPlace.querySelectorAll('.question-block');
const questions = workPlace.querySelectorAll('.questions-list > li');
const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

forEach(questions, addElementCircle);

for (let i = 0; i < blockList.length; i += 1) {
  blockList[i].addEventListener('click', (evt) => {
    forEach(blockList, (el) => {
      removeClass(el, 'active');
    });

    blockList[i].classList.add('active');

    const target = workPlace.querySelector(evt.currentTarget.dataset.target);

    forEach(answerList, (el) => {
      removeClass(el, 'visible');
    });

    for (let e = 0; e < questionBlockList.length; e += 1) {
      questionBlockList[e].style.height = '0';
      questionBlockList[e].setAttribute('hidden', 'hiden');
    }

    target.removeAttribute('hidden');
    setTimeout(() => {
      target.style.height = `${target.scrollHeight}px`;
      setTimeout(() => {
        target.style.height = '';
      }, 500);
    }, 10);
  });
}

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    const target = workPlace.querySelector(evt.target.dataset.target);
    target.style.height = `${target.scrollHeight}px`;
    target.classList.toggle('visible');

    setTimeout(() => {
      target.style.height = `${target.scrollHeight}px`;
    }, 10);
  });
}
