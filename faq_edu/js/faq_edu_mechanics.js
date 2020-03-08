const workPlace = document.querySelector('.faq-edu-wrapper');
const coiceBlockArea = workPlace.querySelector('.choice-block-area');
console.log(coiceBlockArea);
const blockList = workPlace.querySelectorAll('.block-name');
const questionBlockList = workPlace.querySelectorAll('.question-block');
const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

for (question of questionList) {
  console.log(question.innerHTML);
  let circle = document.createElement('div');
  circle.classList.add('circle');
  circle.innerHTML = '<div class="circle_circle"><div class="circle_point"></div></div>';
  question.appendChild(circle);
}

for (let i = 0; i < blockList.length; i += 1) {
  blockList[i].addEventListener('click', (evt) => {
    console.log(evt.currentTarget);
    for (let q = 0; q < blockList.length; q += 1) {
      blockList[q].classList.remove('active');
    }

    blockList[i].classList.add('active');

    const target = workPlace.querySelector(evt.currentTarget.dataset.target);

    for (let a = 0; a < answerList.length; a += 1) {
      answerList[a].classList.remove('visible');
    }

    for (let e = 0; e < questionBlockList.length; e += 1) {
      questionBlockList[e].style.height = '0';
      questionBlockList[e].setAttribute('hidden', 'hiden');
    }

    target.removeAttribute('hidden');
    setTimeout(() => {
      target.style.height = `${target.scrollHeight}px`;
      setTimeout(() => {
        target.style.height = '';
      }, 1010);
    }, 10);
    console.log(target.attributes);
    console.log(target);
  });
}

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    const target = workPlace.querySelector(evt.target.dataset.target);
    target.style.height = `${target.scrollHeight}px`;
    target.classList.toggle('visible');

    setTimeout(() => {
      target.style.height = `${target.scrollHeight}px`;
      setTimeout(() => {
        target.style.height = '';
      }, 1010);
    }, 10);
  });
}
