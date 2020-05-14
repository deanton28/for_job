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
const questionsTselevyeSubsidii = [
  {
    question: 'Каким нормативным документом регулируется порядок предоставления субсидий на поддержку региональных проектов в сфере информационных технологий?',
    answer: 'Субсидия на поддержку региональных проектов в сфере информационных технологий предоставляется в соответствии с Правилами распределения и предоставления из федерального бюджета субсидий бюджетам субъектов Российской Федерации на поддержку региональных проектов в сфере информационных технологий, приведенными в приложении № 2 к государственной программе Российской Федерации «Информационное общество», утвержденной постановлением Правительства Российской Федерации от 15 апреля 2014 года № 313.',
  },
  {
    question: 'Подскажите, пожалуйста, какие документы необходимо предоставить в Минкомсвязь России для заключения соглашения на предоставление субсидии на поддержку региональных проектов в сфере информационных технологий?',
    answer: 'Для заключения соглашения в соответствии с пунктом 19 Правил распределения и предоставления из федерального бюджета субсидий бюджетам субъектов Российской Федерации на поддержку региональных проектов в сфере информационных технологий, приведенными в приложении № 2 к государственной программе Российской Федерации «Информационное общество», утвержденной постановлением Правительства Российской Федерации от 15 апреля 2014 года № 313 (далее - Правила) субъекту Российской Федерации необходимо предоставить в Минкомсвязь России в установленные сроки следующие документы:<br>а) сопроводительное письмо по форме, определённой Минкомсвязью России;<br>б) документ, подтверждающий наличие в бюджете субъекта Российской Федерации (сводной бюджетной росписи бюджета субъекта Российской Федерации) бюджетных ассигнований на исполнение расходных обязательств субъекта Российской Федерации, в целях софинансирования которых предоставляется субсидия, в объеме, необходимом для их исполнения, включая размер планируемой к предоставлению из федерального бюджета субсидии, определяемом в соответствии с пунктом 13 Правил формирования, предоставления и распределения субсидий из федерального бюджета бюджетам субъектов Российской Федерации, утвержденных постановлением Правительства Российской Федерации от 30 сентября 2014 года № 999 «О формировании, предоставлении и распределении субсидий из федерального бюджета бюджетам субъектов Российской Федерации»;<br>в) правовой акт (правовые акты) субъекта Российской Федерации, утверждающий (утверждающие) перечень проектов (мероприятий), в целях софинансирования которых предоставляется субсидия.',
  },
  {
    question: 'На какие цели можно потратить субсидию на поддержку региональных проектов в сфере информационных технологий?',
    answer: 'Субъекты Российской Федерации – получатели субсидии в 2020 году должны направить ее на автоматизацию приоритетных видов контрольно-надзорной деятельности в целях внедрения риск-ориентированного подхода.',
  },
];
const questionsDEObschieVoprosy = [
  {
    question: 'Когда субъектам РФ необходимо направлять в адрес Минкомсвязи России отчеты о ходе реализации региональных проектов в рамках национального проекта «Цифровая экономика»?',
    answer: 'В соответствии с  пп. 2.2.5. раздела II. Обязанности сторон соглашений о реализации на территории субъектов РФ 5-и региональных проектов в области цифровой экономики, заключенных между руководителями федеральных проектов и руководителями региональных проектов, направление отчетов осуществляется не позднее 4-го рабочего дня месяца, следующего за отчетным периодом.',
  },
  {
    question: 'Что должны содержать отчетные материалы о реализации региональных проектов?',
    answer: 'В качестве отчетных материалов субъектам РФ необходимо направлять следующее:<br>1. отчеты по каждому из 5-и региональных проектов национального проекта «Цифровая экономика»: «Информационная безопасность», «Информационная инфраструктура», «Кадры для цифровой экономики», «Цифровое государственное управление», «Цифровые технологии», независимо от наличия или отсутствия в отчетном и прогнозном периодах запланированных мероприятий, контрольных точек или достижений результатов;<br>2. паспорта каждого из региональных проектов;<br>3. сопроводительное письмо.',
  },
];
const questionsDEInformationBezopasnost = [
  {
    question: 'Что учитывается при расчете значения показателя «Количество подготовленных специалистов по образовательным программам в области информационной безопасности, с использованием в образовательном процессе отечественных высокотехнологичных комплексов и средств защиты информации»?',
    answer: 'При расчете данного показателя учитывается количество выпускников по направлениям, указанным в приложениях к методике, а также получивших дополнительное образование по направлению «Информационная безопасность».',
  },
  {
    question: 'Поскольку речь идет о выпускниках, то не понятно – как можно повлиять на рост значения показателя (данные студенты уже учатся, изменить их количество в сторону увеличения невозможно)? Только за счет увеличения проходящих дополнительного образования?',
    answer: 'Перечень укрупнённых групп специальностей и направлений был расширен, за счет этого, – показатели будут достигнуты.',
  },
  {
    question: 'Засчитываться обучение будет по месту регистрации образовательного учреждения? Пример: сотрудник из г. Челябинска, обучившийся в другом городе и вернувшийся обратно. В данном случае показатель не будет засчитываться для Челябинской области?',
    answer: 'Нет,  в данном примере показатель будет засчитываться для Челябинской области при наличии удостоверяющего документа.',
  },
  {
    question: 'Если в образовательной организации с филиальной структурой обучение проходит в филиале, отчитываться по обучающимся будет филиал или юр. лицо – головная организация? количество обучающихся будет засчитываться за каким регионом (филиала или головной организации)?',
    answer: 'Отчитываться будет организация, которая находиться на территории субъекта РФ.',
  },
  {
    question: 'Допустим, что значение показателя «Стоимостная доля закупаемого и (или) арендуемого федеральными органами исполнительной власти, органами исполнительной власти субъектов и иными органами государственной власти отечественного программного обеспечения» в субъекте РФ за 2019 год составляет 47%. А по соглашению с Минкомсвязью России данный показатель в 2020 году должен составлять 70%. Методики расчета утверждены в середине 2019 года, в связи с чем, при подписании соглашения с Минкомсвязью России, невозможно было достоверно рассчитать данный показатель.<br>Реализация указанного показателя со значением 70% предполагается невозможной. Возможно ли изменить значение показателя на 2020 на 50%, с последующим нарастанием на 5% каждый год?',
    answer: 'Методика расчета будет доработана на основе предложений от субъектов РФ (письмо Минкомсвязи России № ММ-П25-070-3093 от 12.02.2020)',
  },
];
const questionsDEInformationInfrastructure = [
  {
    question: 'В качестве знаменателя формулы расчета показателей указано использовать общее количество социально значимых организаций (СЗО) конкретного типа, в качестве числителя - количество подключенных к сети Интернет СЗО конкретного типа. В настоящее время в соглашении о реализации регионального проекта «Информационная инфраструктура» (Челябинская область) между Минкомсвязью  России и Мининформом (далее - Соглашение) расчет показателей осуществлен на основании сведений о СЗО, нуждающихся в подключении к Интернету, представленных в адрес Минкомсвязи перечнем, утвержденным Губернатором Челябинской области письмом от 30.04.2019 № 02/2796. На этом основании базовые показатели в Соглашении равны «0».<br>В связи просим пояснить необходимость инициирования изменения показателей Соглашения с учетом необходимости учета СЗО, подключенных вне госконтракта, реализуемого по проекту «ИИ».',
    answer: 'Объекты, не подключаемые в рамках госконтракта в зачет не идут.',
  },
  {
    question: 'Просьба пояснить о критериях отнесения СЗО к нуждающимся в подключении на заданных федеральным проектом скоростях. В настоящее время имеют место случаи, когда СЗО (образовательное учреждение) подключен по ВОЛС, но оператор не готов обеспечить необходимую проектом скорость без дополнительных вложений. Нам необходима методика для выявления таких СЗО. Она необходима для расчета показателей в соответствии с Методикой, так и для формирования и направления в Ваш адрес предложений о замене части СЗО, включенных в Госконтракт, заключенный в рамках проекта «ИИ». По представленной раннее методике, исполнитель Госконтракта должен обследовать объект и определить нуждаемость в подключении.  Это предложение актуально только для СЗО, которые включены в Госконтракт. Для тех, которые не включены в Госконтракт, как определить нуждаемость в подключении?',
    answer: 'Те СЗО, которые не вошли в Госконтракт, не учитываются. Все условия подключения четко определены Госконтрактом.',
  },
];


const workPlace = document.querySelector('.faq-region-wrapper');
const placeQuestionsWorkRKP = workPlace.querySelector('.block-questions_workRKP');
const placeQuestionsTS = workPlace.querySelector('.block-questions_TS');
const placeQuestionsDEOV = workPlace.querySelector('.sub-block_DEOV');
const placeQuestionsDEIB = workPlace.querySelector('.sub-block_DEIB');
const placeQuestionsDEII = workPlace.querySelector('.sub-block_DEII');


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

const fragmentTS = document.createDocumentFragment();
for (let i = 0; i < questionsTselevyeSubsidii.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-area');
  question.innerHTML = `
    <div class="question" data-target=".block_TS-answer_${i}">
      ${questionsTselevyeSubsidii[i].question}
    </div>
    <div class="answer block_TS-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questionsTselevyeSubsidii[i].answer}
    </div>`;
  fragmentTS.appendChild(question);
}
placeQuestionsTS.appendChild(fragmentTS);

const fragmentDEOV = document.createDocumentFragment();
for (let i = 0; i < questionsDEObschieVoprosy.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-area');
  question.innerHTML = `
    <div class="question" data-target=".sub-block_DEOV-answer_${i}">
      ${questionsDEObschieVoprosy[i].question}
    </div>
    <div class="answer sub-block_DEOV-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questionsDEObschieVoprosy[i].answer}
    </div>`;
  fragmentDEOV.appendChild(question);
}
placeQuestionsDEOV.appendChild(fragmentDEOV);

const fragmentDEIB = document.createDocumentFragment();
for (let i = 0; i < questionsDEInformationBezopasnost.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-area');
  question.innerHTML = `
    <div class="question" data-target=".sub-block_DEIB-answer_${i}">
      ${questionsDEInformationBezopasnost[i].question}
    </div>
    <div class="answer sub-block_DEIB-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questionsDEInformationBezopasnost[i].answer}
    </div>`;
  fragmentDEIB.appendChild(question);
}
placeQuestionsDEIB.appendChild(fragmentDEIB);

const fragmentDEII = document.createDocumentFragment();
for (let i = 0; i < questionsDEInformationInfrastructure.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-area');
  question.innerHTML = `
    <div class="question" data-target=".sub-block_DEII-answer_${i}">
      ${questionsDEInformationInfrastructure[i].question}
    </div>
    <div class="answer sub-block_DEII-answer_${i}">
      <span class="answer-word">Ответ:</span>
      ${questionsDEInformationInfrastructure[i].answer}
    </div>`;
  fragmentDEII.appendChild(question);
}
placeQuestionsDEII.appendChild(fragmentDEII);

const questionList = workPlace.querySelectorAll('.question');
const answerList = workPlace.querySelectorAll('.answer');

for (let i = 0; i < questionList.length; i += 1) {
  questionList[i].addEventListener('click', (evt) => {
    console.log(evt.target.dataset.target);
    const target = workPlace.querySelector(evt.target.dataset.target);
    console.log(target);
    target.classList.toggle('visible');
  });
}

//-------------------------------------------------

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

// const questionsList = workPlace.querySelectorAll('.question');
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
const subBlockList = workPlace.querySelectorAll('.sub-block-title');
// console.log(subBlockList);

for (let a = 0; a < subBlockList.length; a += 1) {
  subBlockList[a].addEventListener('click', (ev) => {
    // console.log(ev.target);
    const answer = workPlace.querySelector(ev.target.dataset.target);

    // console.log(answer);
    // console.log(answer.hidden);

    if (answer.hidden) {
      answer.removeAttribute('hidden');
    } else {
      answer.setAttribute('hidden', 'hidden');
    }
  });
}
