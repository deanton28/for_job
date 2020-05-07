console.log('check');
const questionsWorkRKP = [
  {
    question: 'Мне необходимо сменить адрес электронной почты, которую я использовал при регистрации в личном кабинете. Как я могу это сделать?',
    answer: 'Для смены адреса электронной почты Вам необходимо направить сканированную копию письма на адрес электронной почты: <a href="mailto:region@ceki.ru?subject=Изменение логина">region@ceki.ru</a>  с запросом изменения логина и пояснением необходимости внесения таких корректировок.',
  },
  {
    question: 'Можно ли увеличить число авторизованных пользователей в личном кабинете региона?',
    answer: 'Для обеспечения бесперебойной работы Региональной коммуникационной площадки на сегодняшний день максимальное число пользователей, авторизованных от одного региона, не должно превышать 5 человек. В случае необходимости увеличения числа авторизованных пользователей Вам необходимо направить запрос о регистрации и авторизации пользователя на адрес электронной почты: <a href="mailto:region@ceki.ru?subject=Запрос о регистрации и авторизации пользователя">region@ceki.ru</a>. В запросе указывается следующая информация: наименование органа государственной власти субъекта РФ, фамилия, имя, отчество, наименование занимаемой должности, адрес электронной почты, номер рабочего телефона. Все запросы будут рассматриваться в индивидуальном порядке.',
  },
  {
    question: 'Подскажите, пожалуйста, куда обратиться для корректировки состава авторизованных пользователей, а также корректировки контактных данных в личном кабинете региона.',
    answer: 'Для корректировки состава авторизованных пользователей, а также контактных данных  Вам необходимо направить сканированную копию письма на адрес электронной почты: <a href="mailto:region@ceki.ru?subject=Корректировка контактной информации">region@ceki.ru</a> с запросом о необходимости корректировки контактной информации, либо внесении изменений в состав авторизованных участников в личном кабинете региона, с указанием причины, а также полной информации о представителе субъекта РФ, которого необходимо зарегистрировать на Региональной коммуникационной площадке, а именно: наименование органа государственной власти субъекта РФ, фамилию, имя, отчество, наименование занимаемой должности, адрес электронной почты, номер рабочего телефона.',
  },
];

const workPlace = document.querySelector('.faq-region-wrapper');
const placeQuestionsWorkRKP = workPlace.querySelector('.block-questions_workRKP');

const fragmentWorkRKP = document.createDocumentFragment();
for (let i = 0; i < questionsWorkRKP.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-area');
  question.innerHTML = `
    <div class="question" data-target=".block_workRKP-answer_${i}">
      ${questionsWorkRKP[i].question}
    </div>
    <div class="answer block_workRKP-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questionsWorkRKP[i].answer}
    </div>`;
  fragmentWorkRKP.appendChild(question);
}
placeQuestionsWorkRKP.appendChild(fragmentWorkRKP);

console.log(placeQuestionsWorkRKP);

const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    console.log(evt.target.dataset.target);
    const target = workPlace.querySelector(evt.target.dataset.target);
    console.log(target);
    target.classList.toggle('visible');
  });
};

const titleNames = workPlace.querySelectorAll('.block-title');
// const blockTitle = questionBlock.querySelector('.block-title');
// const blockQuestion = workPlace.querySelector('.block-questions');
// console.log(titleNames);

for (let i = 0; i < titleNames.length; i += 1) {
  titleNames[i].addEventListener('click', (evt) => {
//    console.log(evt.target.dataset.target);
    const target = workPlace.querySelector(evt.target.dataset.target);

//    console.log(target.hidden);

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
// console.log(questionsList);

// for (let a = 0; a < questionsList.length; a += 1) {
//   questionsList[a].addEventListener('click', (ev) => {
//     console.log(ev.target.dataset.target);
//     const answer = workPlace.querySelector(ev.target.dataset.target);
//
//     console.log(answer);
//     console.log(answer.hidden);
//
//     if (answer.hidden) {
//       answer.removeAttribute('hidden');
//     } else {
//       answer.setAttribute('hidden', 'hidden');
//     }
//   });
// }
//
// const subBlockList = workPlace.querySelectorAll('.sub-block_name');
// console.log(subBlockList);

// for (let a = 0; a < subBlockList.length; a += 1) {
//   subBlockList[a].addEventListener('click', (ev) => {
//     console.log(ev.target);
//     const answer = workPlace.querySelector(ev.target.dataset.target);
//
//     console.log(answer);
//     console.log(answer.hidden);
//
//     if (answer.hidden) {
//       answer.removeAttribute('hidden');
//     } else {
//       answer.setAttribute('hidden', 'hidden');
//     }
//   });
// }
