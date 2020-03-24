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

const hideElement = (element) => {
  element.style.height = '0';
  element.setAttribute('hidden', 'hiden');
};

const setTargetElement = (node, event) => node.querySelector(event.currentTarget.dataset.target);

const setElementHeight = (element) => {
  element.style.height = `${element.scrollHeight}px`;
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
    const target = setTargetElement(workPlace, evt);

    forEach(questionBlockList, hideElement);

    forEach(blockList, (el) => {
      removeClass(el, 'active');
    });

    forEach(answerList, (el) => {
      removeClass(el, 'visible');
    });

    blockList[i].classList.add('active');

    target.removeAttribute('hidden');

    setTimeout(() => {
      setElementHeight(target);
      setTimeout(() => {
        target.style.height = '';
      }, 500);
    }, 10);
  });
}

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    const target = setTargetElement(workPlace, evt);
    setElementHeight(target);
    target.classList.toggle('visible');

    setTimeout(setElementHeight(target), 10);
  });
}
