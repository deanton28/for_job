console.log('check');
console.log(window.questions.check);

const renderQuestionList = (arr, targetCode) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arr.length; i += 1) {
    const question = document.createElement('div');
    question.classList.add('question-area');
    question.innerHTML = `
      <div class="question" data-target="#block-${targetCode}_answer_${i}">
        ${arr[i].question}
      </div>
      <div class="answer" id="block-${targetCode}_answer_${i}">
        <span class="answer-word">Ответ:</span>
        ${arr[i].answer}
      </div>`;
    fragment.appendChild(question);
  }
  document.querySelector(`#block-${targetCode}`).appendChild(fragment);
};

const workPlace = document.querySelector('.faq-region-wrapper');

renderQuestionList(window.questions.questionsWorkRKP, 'workRKP');
renderQuestionList(window.questions.questionsTselevyeSubsidii, 'TS');
renderQuestionList(window.questions.questionsDEObschieVoprosy, 'DEOV');
renderQuestionList(window.questions.questionsDEInformationBezopasnost, 'DEIB');
renderQuestionList(window.questions.questionsDEInformationInfrastructure, 'DEII');
renderQuestionList(window.questions.questionsDESDEUchotObuchennih, 'DESDE-UO');
renderQuestionList(window.questions.questionsDESDERegistratsiyaObuchennih, 'DESDE-RO');
renderQuestionList(window.questions.questionsDESDEOtborKandidatov, 'DESDE-OK');
renderQuestionList(window.questions.questionsDESDEIstochnikiDannih, 'DESDE-IDP');
renderQuestionList(window.questions.questionsDESDEStatusCentraKonpetency, 'DESDE-SCK');
renderQuestionList(window.questions.questionsDESDEVPOiSPO, 'DESDE-VPO');
renderQuestionList(window.questions.questionsDESDEUchetNesubektnyhVuzov, 'DESDE-UNV');
renderQuestionList(window.questions.questionsDESDEPoiskOO, 'DESDE-POO');
renderQuestionList(window.questions.questionsDESDEZapolnenieOtpravkaForm, 'DESDE-ZOF');
renderQuestionList(window.questions.questionsDESDECorrectPokazateleySrokov, 'DESDE-KPS');
renderQuestionList(window.questions.questionsDESDE22NapravleniePodgotovki, 'DESDE-22NP');
renderQuestionList(window.questions.questionsDESDERaznoe, 'DESDE-RAZ');
renderQuestionList(window.questions.questionsDEDigitalTehnology, 'DEDT');
renderQuestionList(window.questions.questionsDEDigitalGosUpravlenie, 'DEDGU');

const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    const target = workPlace.querySelector(evt.currentTarget.dataset.target);
    target.classList.toggle('visible');
  });
}

//-------------------------------------------------

const titleNames = workPlace.querySelectorAll('.block-title');

for (let i = 0; i < titleNames.length; i += 1) {
  titleNames[i].addEventListener('click', (evt) => {
    const target = workPlace.querySelector(evt.target.dataset.target);

    if (target.hidden) {
      titleNames[i].classList.add('visible');
      target.removeAttribute('hidden');
    } else {
      titleNames[i].classList.remove('visible');
      target.setAttribute('hidden', 'hidden');
    }
  });
}

const subBlockList = workPlace.querySelectorAll('.sub-block-title');

for (let a = 0; a < subBlockList.length; a += 1) {
  subBlockList[a].addEventListener('click', (ev) => {
    const target = workPlace.querySelector(ev.target.dataset.target);
    target.classList.toggle('visible');
  });
}
