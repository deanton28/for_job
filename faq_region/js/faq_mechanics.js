console.log('check');

const workPlace = document.querySelector('.faq-region-wrapper');
const titleNames = workPlace.querySelectorAll('.block-title');
// const blockTitle = questionBlock.querySelector('.block-title');
// const blockQuestion = workPlace.querySelector('.block-questions');
console.log(titleNames);

for (let i = 0; i < titleNames.length; i += 1) {
  titleNames[i].addEventListener('click', (evt) => {
    console.log(evt.target.dataset.target);
    const target = workPlace.querySelector(evt.target.dataset.target);

    console.log(target.hidden);

    if (target.hidden) {
      titleNames[i].classList.add('visible');
      target.removeAttribute('hidden');
    } else {
      titleNames[i].classList.remove('visible');
      target.setAttribute('hidden', 'hidden');
    }
  });
}

const questionsList = workPlace.querySelectorAll('.question');
console.log(questionsList);

for (let a = 0; a < questionsList.length; a += 1) {
  questionsList[a].addEventListener('click', (ev) => {
    console.log(ev.target.dataset.target);
    const answer = workPlace.querySelector(ev.target.dataset.target);

    console.log(answer);
    console.log(answer.hidden);

    if (answer.hidden) {
      answer.removeAttribute('hidden');
    } else {
      answer.setAttribute('hidden', 'hidden');
    }
  });
}

const subBlockList = workPlace.querySelectorAll('.sub-block_name');
console.log(subBlockList);

for (let a = 0; a < subBlockList.length; a += 1) {
  subBlockList[a].addEventListener('click', (ev) => {
    console.log(ev.target);
    const answer = workPlace.querySelector(ev.target.dataset.target);

    console.log(answer);
    console.log(answer.hidden);

    if (answer.hidden) {
      answer.removeAttribute('hidden');
    } else {
      answer.setAttribute('hidden', 'hidden');
    }
  });
}
