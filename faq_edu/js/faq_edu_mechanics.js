console.log('check');

const workPlace = document.querySelector('.faq-edu-wrapper');
const coiceBlockArea = workPlace.querySelector('.choice-block-area');
console.log(coiceBlockArea);
const arrowLeft = coiceBlockArea.querySelector('.arrow-left');
const arrowRight = coiceBlockArea.querySelector('.arrow-right');
// const blockArea = coiceBlockArea.querySelector('.block-area');
const blockNameList = coiceBlockArea.querySelectorAll('.block-name');
console.log(blockNameList);
const blockQuestionList = workPlace.querySelectorAll('.question-block');
console.log(blockQuestionList.length);
let blockCount = 0;

arrowLeft.addEventListener('click', () => {
  console.log('arrowLeft check');
  if (blockCount > 0) {
    for (let i = 0; i < blockNameList.length; i += 1) {
      blockNameList[i].classList.remove('active');
    }
    blockCount -= 1;
    console.log(blockCount);
    blockNameList[blockCount].classList.add('active');
    console.log(blockNameList);
    for (let q = 0; q < blockQuestionList.length; q += 1) {
      blockQuestionList[q].setAttribute('hidden', 'hidden');
    }
    const questionsList = document.querySelector(blockNameList[blockCount].dataset.target);
    console.log(questionsList);
    questionsList.removeAttribute('hidden');
  }
});

arrowRight.addEventListener('click', () => {
  if (blockCount < blockNameList.length - 1) {
    for (let i = 0; i < blockNameList.length; i += 1) {
      blockNameList[i].classList.remove('active');
    }
    blockCount += 1;
    console.log(blockCount);
    blockNameList[blockCount].classList.add('active');
    console.log(blockNameList);
    for (let q = 0; q < blockQuestionList.length; q += 1) {
      blockQuestionList[q].setAttribute('hidden', 'hidden');
    }
    const questionsList = document.querySelector(blockNameList[blockCount].dataset.target);
    console.log(questionsList);
    questionsList.removeAttribute('hidden');
  }
});
