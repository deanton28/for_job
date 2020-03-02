console.log('check');

const workPlace = document.querySelector('.faq-edu-wrapper');
const coiceBlockArea = workPlace.querySelector('.choice-block-area');
console.log(coiceBlockArea);
const blockList = workPlace.querySelectorAll('.block-name');
console.log(blockList);
const questionBlockList = workPlace.querySelectorAll('.question-block');
console.log(questionBlockList);
const questionList = workPlace.querySelectorAll('.question');
console.log(questionList);
const answerList = workPlace.querySelectorAll('.answer');
console.log(answerList);

for (let i = 0; i < blockList.length; i += 1) {
  blockList[i].addEventListener('click', (evt) => {
    console.log(evt.target.dataset.target);
    for (let q = 0; q < blockList.length; q += 1) {
      blockList[q].classList.remove('active');
    }
    blockList[i].classList.add('active');
    const target = workPlace.querySelector(evt.target.dataset.target);
    console.log(target);
    for (let a = 0; a < answerList.length; a += 1) {
      answerList[a].classList.remove('visible');
    }
    for (let e = 0; e < questionBlockList.length; e += 1) {
      questionBlockList[e].setAttribute('hidden', 'hidden');
    }
    target.removeAttribute('hidden');
  });
}

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    console.log(evt.target.dataset.target);
    const target = workPlace.querySelector(evt.target.dataset.target);
    console.log(target);
    console.log(target.hidden);

    target.classList.toggle('visible');
  });
}
