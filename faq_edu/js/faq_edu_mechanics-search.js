const forEach = (array, collback) => {
  for (let i = 0; i < array.length; i += 1) {
    collback(array[i], i);
  }
};

// const addElementCircle = (parentElement) => {
//   const element = document.createElement('div');
//   element.classList.add('circle');
//   element.innerHTML = '<div class="circle_circle"><div class="circle_point"></div></div>';
//   parentElement.appendChild(element);
// };

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

const displaySelectedBlockQuestions = (event, node, blockNames, block, questions, answers) => {
  const target = setTargetElement(node, event);

  forEach(questions, hideElement);
  forEach(blockNames, (el) => {
    removeClass(el, 'active');
  });
  forEach(answers, (el) => {
    removeClass(el, 'visible');
  });
  block.classList.add('active');
  target.removeAttribute('hidden');
  setTimeout(() => {
    setElementHeight(target);
    setTimeout(() => {
      target.style.height = '';
    }, 500);
  }, 10);
};

const displayHideAnswer = (event, node) => {
  const target = setTargetElement(node, event);

  setElementHeight(target);
  target.classList.toggle('visible');
  setTimeout(setElementHeight(target), 10);
};

const workPlace = document.querySelector('.faq-edu-wrapper');
const blockList = workPlace.querySelectorAll('.block-name');
const questionBlockList = workPlace.querySelectorAll('.block-question');
// const questions = workPlace.querySelectorAll('.questions-list > li');
const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

// forEach(questions, addElementCircle);
forEach(blockList, (block) => {
  block.addEventListener('click', (evt) => {
    displaySelectedBlockQuestions(evt, workPlace, blockList, block, questionBlockList, answerList);
  });
});
forEach(questionList, (el) => {
  el.addEventListener('click', (evt) => {
    displayHideAnswer(evt, workPlace);
  });
});
