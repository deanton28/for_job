const renderQuestionsList = (questions, code, block) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < questions.length; i += 1) {
    const question = document.createElement('div');
    question.classList.add('question-section');
    question.innerHTML = `
    <div class="${questions[i].new === 'new' ? 'question new' : 'question'}" data-target=".block_${code}-answer_${i}">
      ${questions[i].question}
    </div>
    <div class="answer block_${code}-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questions[i].answer}
    </div>
    <div class="circle">
      <div class="${questions[i].new === 'new' ? 'circle_circle new' : 'circle_circle'}">
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

const setActiveDescription = (checkbox, descriptionOne, descriptionTwo) => {
  descriptionOne.classList.toggle('active', checkbox.checked);
  if (descriptionTwo) {
    descriptionTwo.classList.toggle('active', !checkbox.checked);
  }
};

const displaySearchField = (searchFrase, checkbox, checkNew, dataList) => {
  const searchValue = searchFrase.value;

  let regexp = new RegExp((searchValue.match(/[а-я]{3,}|\d{2,}/gi) ? searchValue.match(/[а-я]{3,}|\d{2,}/gi).join('|') : ''), 'i');
  if (!checkbox.checked) {
    regexp = new RegExp(searchValue, 'i');
  }

  for (let i = 0; i < dataList.length; i += 1) {
    if (checkNew.checked) {
      if (dataList[i].classList.contains('new') && regexp.test(dataList[i].innerHTML)) {
        dataList[i].removeAttribute('hidden');
      } else {
        dataList[i].setAttribute('hidden', 'hidden');
      }
    } else if (regexp.test(dataList[i].innerHTML)) {
      dataList[i].removeAttribute('hidden');
    } else {
      dataList[i].setAttribute('hidden', 'hidden');
    }
  }
};

const questionPlace = document.querySelector('.question-area');
const questionBlockNEW = questionPlace.querySelector('.block-questions_NEW');
const questionBlockVPCT = questionPlace.querySelector('.block-questions_VPCT');
const questionBlockNPA = questionPlace.querySelector('.block-questions_NPA');
const questionBlockFGISKI = questionPlace.querySelector('.block-questions_FGISKI');
const questionBlockOu = questionPlace.querySelector('.block-questions_OU');
const questionBlockMpi = questionPlace.querySelector('.block-questions_MPI');
const questionBlockTRU = questionPlace.querySelector('.block-questions_TRU');
const questionsList = questionPlace.getElementsByClassName('question');

const searchPlace = document.querySelector('.search-area');
const searchField = searchPlace.querySelector('.search-value');
const searchButton = searchPlace.querySelector('.search-button');
const separate = searchPlace.querySelector('.separete');
const together = searchPlace.querySelector('.together');
const checkType = searchPlace.querySelector('#search-type');

const checkNew = searchPlace.querySelector('#search-new');
const onlyNew = searchPlace.querySelector('.only-new');

renderQuestionsList(window.questions.newQuestions, 'NEW', questionBlockNEW);
renderQuestionsList(window.questions.departamentalProgrammDigitalTransfprmation, 'VPCT', questionBlockVPCT);
renderQuestionsList(window.questions.normativeLegalActs, 'NPA', questionBlockNPA);
renderQuestionsList(window.questions.fgisKi, 'FGISKI', questionBlockFGISKI);
renderQuestionsList(window.questions.objecktAccounting, 'OU', questionBlockOu);
renderQuestionsList(window.questions.eventOnInformatization, 'MPI', questionBlockMpi);
renderQuestionsList(window.questions.purchasesTru, 'TRU', questionBlockTRU);

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  displaySearchField(searchField, checkType, checkNew, questionsList);
});

separate.addEventListener('click', () => {
  checkType.checked = true;
  setActiveDescription(checkType, separate, together);
  displaySearchField(searchField, checkType, checkNew, questionsList);
});

together.addEventListener('click', () => {
  checkType.checked = false;
  setActiveDescription(checkType, separate, together);
  displaySearchField(searchField, checkType, checkNew, questionsList);
});

checkType.addEventListener('change', () => {
  setActiveDescription(checkType, separate, together);
  displaySearchField(searchField, checkType, checkNew, questionsList);
});

onlyNew.addEventListener('click', () => {
  checkNew.checked = !checkNew.checked;
  setActiveDescription(checkNew, onlyNew);
  displaySearchField(searchField, checkType, checkNew, questionsList);
});

checkNew.addEventListener('change', () => {
  setActiveDescription(checkNew, onlyNew);
  displaySearchField(searchField, checkType, checkNew, questionsList);
});
