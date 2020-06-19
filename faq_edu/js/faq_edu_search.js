const renderQuestionsList = (questions, code, block) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < questions.length; i += 1) {
    const question = document.createElement('div');
    question.classList.add('question-section');
    question.innerHTML = `
    <div class="question" data-target=".block_${code}-answer_${i}">
      ${questions[i].question}
    </div>
    <div class="answer block_${code}-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questions[i].answer}
    </div>
    <div class="circle">
      <div class="circle_circle">
        <div class="circle_point">
        </div>
      </div>
    </div>
    `;
    fragment.appendChild(question);
  }

  const questionList = document.createElement('div');
  questionList.classList.add('questions-list');
  questionList.appendChild(fragment);
  block.appendChild(questionList);
};

const questionPlace = document.querySelector('.question-area');
const questionBlockVPCT = questionPlace.querySelector('.block-questions_VPCT');
const questionBlockOu = questionPlace.querySelector('.block-questions_OU');
const questionBlockMpi = questionPlace.querySelector('.block-questions_MPI');

const searchPlace = document.querySelector('.search-area');
const searchField = searchPlace.querySelector('.search-value');
const searchButton = searchPlace.querySelector('.search-button');

renderQuestionsList(window.questions.departamentalProgrammDigitalTransfprmation, 'VPCT', questionBlockVPCT);
renderQuestionsList(window.questions.objecktAccounting, 'OU', questionBlockOu);
renderQuestionsList(window.questions.eventOnInformatization, 'MPI', questionBlockMpi);

// searchButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   const searchValue = searchField.value;
//   const regexp = new RegExp((searchValue.match(/[а-я]{3,}|\d{2,}/gi) ? searchValue.match(/[а-я]{3,}|\d{2,}/gi).join('|') : ''), 'i');
//   const questionSections = questionPlace.querySelectorAll('.question-section');
//
//   for (let i = 0; i < questionSections.length; i += 1) {
//     if (regexp.test(questionSections[i].querySelector('.question').innerHTML)) {
//       questionSections[i].removeAttribute('hidden');
//     } else {
//       questionSections[i].setAttribute('hidden', 'hidden');
//     }
//   }
// });

// Работаем с radio----------------------------------
const separate = searchPlace.querySelector('.separete');
const together = searchPlace.querySelector('.together');
const checkbox = searchPlace.querySelector('input[type=checkbox]');

separate.addEventListener('click', () => {
  checkbox.checked = true;
  separate.classList.toggle('active', checkbox.checked);
  together.classList.toggle('active', !checkbox.checked);

  const searchValue = searchField.value;

  console.log(searchValue);
  console.log(searchValue.match(/[а-я]{3,}|\d{2,}/gi));

  let regexp = new RegExp((searchValue.match(/[а-я]{3,}|\d{2,}/gi) ? searchValue.match(/[а-я]{3,}|\d{2,}/gi).join('|') : ''), 'i');

  if (!checkbox.checked) {
    regexp = new RegExp(searchValue, 'i');
  }

  console.log(regexp);

  const questionSections = questionPlace.querySelectorAll('.question-section');

  for (let i = 0; i < questionSections.length; i += 1) {
    if (regexp.test(questionSections[i].querySelector('.question').innerHTML)) {
      questionSections[i].removeAttribute('hidden');
    } else {
      questionSections[i].setAttribute('hidden', 'hidden');
    }
  }
});

together.addEventListener('click', () => {
  checkbox.checked = false;
  separate.classList.toggle('active', checkbox.checked);
  together.classList.toggle('active', !checkbox.checked);

  const searchValue = searchField.value;

  console.log(searchValue);
  console.log(searchValue.match(/[а-я]{3,}|\d{2,}/gi));

  let regexp = new RegExp((searchValue.match(/[а-я]{3,}|\d{2,}/gi) ? searchValue.match(/[а-я]{3,}|\d{2,}/gi).join('|') : ''), 'i');

  if (!checkbox.checked) {
    regexp = new RegExp(searchValue, 'i');
  }

  console.log(regexp);

  const questionSections = questionPlace.querySelectorAll('.question-section');

  for (let i = 0; i < questionSections.length; i += 1) {
    if (regexp.test(questionSections[i].querySelector('.question').innerHTML)) {
      questionSections[i].removeAttribute('hidden');
    } else {
      questionSections[i].setAttribute('hidden', 'hidden');
    }
  }
});
searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const searchValue = searchField.value;

  console.log(searchValue);
  console.log(searchValue.match(/[а-я]{3,}|\d{2,}/gi));

  let regexp = new RegExp((searchValue.match(/[а-я]{3,}|\d{2,}/gi) ? searchValue.match(/[а-я]{3,}|\d{2,}/gi).join('|') : ''), 'i');

  if (!checkbox.checked) {
    regexp = new RegExp(searchValue, 'i');
  }

  console.log(regexp);

  const questionSections = questionPlace.querySelectorAll('.question-section');

  for (let i = 0; i < questionSections.length; i += 1) {
    if (regexp.test(questionSections[i].querySelector('.question').innerHTML)) {
      questionSections[i].removeAttribute('hidden');
    } else {
      questionSections[i].setAttribute('hidden', 'hidden');
    }
  }
});
