const objecktAccounting = [
  {
    question: 'Как в ручную внести изменение в поле "Текущий статус ИС" электронного паспорта объекта учета?',
    answer: 'Самостоятельно внести изменение в поле "Текущий статус ИС" невозможно. Данное изменение можно внести только через запрос в службу технической поддержки по телефонам +7 (499) 600 11 21, 8 800 100 11 23 или по электронной почте support@eskigov.ru',
  },
  {
    question: 'Как внести актуальные данные в поле «Ответственные должностные лица» в Разделе №2 электронного паспорта объекта учета (ЭПОУ)?',
    answer: 'Для внесения актуальных данных в поле «Ответственные должностные лица» необходимо:<ol><li>Перевести ЭПОУ в статус “На доработке”;</li><li>Внести в Раздел 2 актуальные данные лиц ответственных в настоящее время за создание/эксплуатацию ОУ (объекта учёта), указав их ФИО, должность, телефон и адрес электронной почты.</li></ol>Данные вносятся в соответствии с Приложением №4 Приказ Минкомсвязи России от 31.05.2013 N 127',
  },
  {
    question: 'Сколько минимум необходимо указать сотрудников в Разделе 2 электронного паспорта объекта учета?',
    answer: 'При заполнении Раздела 2 электронного паспорта объекта учета необходимо указать минимум два ответственных сотрудника, а именно 1 ответственного сотрудника за создание и 1 ответственного сотрудника за эксплуатацию и распределить пять сфер ответственности указанные в п.17 Приложением №4 Приказ Минкомсвязи России от 31.05.2013 N 127',
  },
  {
    question: 'Кто может заниматься созданием и ведением электронных паспортов в системе ФГИС КИ?',
    answer: 'Сотрудника, ответственного за создание и редактирование электронных паспортов объектов учёта назначает <b><u>руководитель федерального органа исполнительной власти</u></b> (ФОИВ) приказом по ведомству в соответствии с п. 4 Постановления Правительства Российской Федерации от 26 июня 2012 г. № 644.',
  },
  {
    question: 'Нужно ли создавать паспорт на существующие информационные системы и компоненты ИТКИ, которые ранее не заводились в ФГИС КИ, или только на вновь приобретаемые?',
    answer: 'Если работа по созданию электронных паспортов объектов учета в системе ФГИС КИ <b><u>ранее не проводилась</u></b>, то необходимо сведения о существующих информационных системах и компонентах ИТКИ внести в систему и затем на регулярной основе проводить актуализацию электронного паспорта объекта учета (п.15 ПП РФ № 644).<br>Добавление информации по объектам учета введенных в эксплуатацию до вступления в силу постановления Правительства № 644 осуществляется в соответствии с разделом 6 приказа Минкомсвязи России от 31.05.2013 №127',
  },
  {
    question: 'Нужно ли вносить данные об используемом свободном программном обеспечении или только о коммерческом ПО?',
    answer: 'В раздел 3 "Состав ОУ" нужно вносить <b><u>всё программное обеспечение являющееся средством обеспечения для объекта учета</u></b>, на котором работают Ваши ИС или компоненты ИТКИ, при этом стоимость такого вида обеспечения указывается <b><u>ноль</u></b>.',
  },
  {
    question: 'Нужно ли электронный паспорт объекта учета направлять на экспертизу если на него планируются новые МПИ?',
    answer: 'Если электронный паспорт объекта учета содержит не актуальные сведения то <b><u>не зависимо от МПИ</u></b> необходимо его актуализировать в соотв. с пунктом 15 Положения постановления Правительства РФ от 26 июня 2012 г. N 644 "О федеральной государственной информационной системе учета информационных систем, создаваемых и приобретаемых за счет средств федерального бюджета и бюджетов государственных внебюджетных фондов"',
  },
  {
    question: 'На основании каких документов заносится информация о производителе и стоимости ТО/ПО в видах обеспечения?',
    answer: 'Информация о производителе и стоимости ТО/ПО заносятся в электронный паспорт объекта учета на основании заключенного государственного контракта, или иных документов получаемых в результате выполнения государственного контракта.',
  },
  {
    question: 'Как в рамках одного объекта учета разделить внесенную информацию относящуюся к Центральному аппарату и тер. органам?',
    answer: 'Существует 2 варианта отражения информации:<ol><li>вариант. При внесении информации в общий объект учета разделах«Ответственные лица», «Состав ОУ» и «Характеристики» можно уточнить принадлежность элементов к ЦА/подведомственному учреждению, добавляя часть к названию.<br>Например: "Количество пользователей Системы в ТО Тамбовской области". Или "Сервер Dell ТО Саратовской области".</li><li>вариант. Информацию об объектах учета тер. органов и подведомственных учреждений можно занести в отдельные объекты учета тер. подразделений.</li><ol>',
  },
  {
    question: 'На основании какого документа указывается дата создания ОУ в подразделе 6.1. «Сведения о сроках создания»?',
    answer: 'Основанием для внесения информации в поле «Дата создания ОУ» подраздела 6.1. «Сведения о сроках создания» является решение о создании объекта учёта государственного органа, иными словами, документ-основание.',
  },
  {
    question: 'Какую информацию о программном обеспечении необходимо внести в поле «Наименование ПО, ТО» подраздела 3.2. «Виды обеспечения» при заполнении электронного паспорта ОУ во ФГИС КИ?',
    answer: 'В поле «Наименование ПО, ТО» указывается наименование программного или технического обеспечения по спецификациям заключенного государственного контракта (п. 20 приложения № 4 приказа № 127 Минкомсвязи России «Об утверждении методических указаний по осуществлению учета информационных систем и компонентов информационно–телекоммуникационной инфраструктуры»).',
  },
  {
    question: 'В течение какого срока с момента наступления соответствующих событий необходимо добавить информацию в подразделы 6.3. «Сведения об объявлении торгов», 6.4. «Сведения о заключенных государственных контрактах», 6.5. «Сведения об актах сдачи-приёмки» во ФГИС КИ?',
    answer: 'Сведения об объектах учёта в подразделах 6.3. «Сведения об объявлении торгов», 6.4. «Сведения о заключенных государственных контрактах», 6.5. «Сведения об актах сдачи-приёмки» во ФГИС КИ подлежат дополнению и (или) актуализации в срок <b>не более 10 рабочих дней</b> со дня наступления соответствующих событий (п.15 Положения о федеральной государственной информационной системе учёта информационных систем, создаваемых и приобретаемых за счёт средств федерального бюджета и бюджетов государственных внебюджетных фондов, утв. постановлением Правительства РФ от 26 июня 2012 № 644).',
  },
  {
    question: 'Следует ли указывать данные о производителе ПО и ТО в ЭПОУ в статусе «Подготовка к созданию»?',
    answer: 'В ЭПОУ, находящемся в статусе «Подготовка к созданию», не указываются сведения о производителе ПО и ТО, т.к. на данном этапе отсутствует гос. контракт и документы, получаемые в результате выполнения гос. контракта, служащие основанием для правомерного и корректного заполнения соответствующих полей.',
  },
  {
    question: 'Когда будет реализована возможность доступа во ФГИС КИ подведомственным органам для внесения сведений в ЭПОУ по своей части?',
    answer: 'Данную информацию следует уточнить у представителей центрального аппарата, так как стратегия управления объектами учёта находится в зоне ответственности представителей ЦА.<br>Ответственное должностное лицо ЦА может предоставить соответствующие права территориальным органам или запросить их в службе тех. поддержки ФГИС КИ.<br>В случае ограничения прав тер. органов допускается передача необходимых сведений ответственному лицу ЦА вне системы ФГИС КИ.',
  },
  {
    question: 'Как следует отразить сведения о создании ОУ «Интернет-сайты территориальных органов» во ФГИС КИ?',
    answer: 'Органы государственной власти самостоятельно принимают решение о том, как вести учёт Интернет-сайтов территориальных органов власти во ФГИС КИ.<br>Возможно применить следующие варианты:<br>В случае если сайты территориальных органов государственной власти созданы на основании документов конкретных территориальных органов, можно создавать для каждого сайта свой объект учета.<br>В случае если сайты территориальных ОГВ созданы на основании документа центрального аппарата, можно создавать один ОУ для всех сайтов территориальных органов.<br>При этом допустимы и другие варианты учета.',
  },
  {
    question: 'Какие документы следует указывать в подразделе 6.5. «Сведения об актах сдачи-приемки» электронного паспорта объекта учета?',
    answer: 'При заполнении подраздела  6.5.  «Сведения об актах сдачи-приемки» следует указать документ о приемке результатов исполнения государственного контракта, в том числе результатов отдельного этапа исполнения контракта, а также поставленного товара, выполненной работы или оказанной услуги в соответствии с п.7 ст. 94 ФЗ-44. Как правило, такие документы оформляются в виде акта сдачи-приемки.',
  },
  {
    question: 'Что следует указывать в поле «Наименование ПО, ТО» подраздела 3.2. «Виды обеспечения объекта учета»?',
    answer: 'При внесении сведений в поле «Наименование ПО, ТО» подраздела 3.2. «Виды обеспечения объекта учета» следует указывать наименование технического обеспечения. Например, <i>монитор</i>.<br>Также в данном поле может быть указана марка ТО, в случае если исполнен государственный контракт. Например, <i>монитор Vecom</i>.',
  },
  {
    question: 'К какой классификационной категории ОУ следует отнести «Право на использование программного продукта «СБиС++ Электронная отчетность»?',
    answer: 'Программный продукт «СБиС++ Электронная отчетность» следует отнести к 23 классификационной категории, т. к. система необходима для управления финансами, и в соответствии с приложением №1 приказа Минкомсвязи России от 31 мая 2013 г. № 127 "Об утверждении методических указаний по осуществлению учета информационных систем и компонентов информационно-телекоммуникационной инфраструктуры" системы обеспечения деятельности в сфере управления финансов относятся к 23 классификационной категории.',
  },
  {
    question: 'К какой классификационной категории ОУ может быть отнесен принтер?',
    answer: 'Принтер может быть отнесен к 43 или 41 классификационным категориям, если:<br>- принтер сетевой, а значит относится к группе типовых компонентов ИТКИ «Средства печати и копирования данных, издательские системы», то следует применить 43 классификационную категорию,<br>- принтер локальный, т. е. входит в состав АРМ, следует отнести его к 41 классификационной категории.',
  },
  {
    question: 'К какой классификационной категории относится ОУ ПО secretNet?',
    answer: 'ПО secretNet следует отнести к объекту учёта 46 классификационной категории, т.к  ПО относится к средствам защиты информации.',
  },
  {
    question: 'Какой классификационной категории следует создать ОУ для учета расходов по продлению домена?',
    answer: 'Если расходы по продлению домена предполагаются для обеспечения эксплуатации официального сайта государственного органа, следует создать объект учета 10 классификационной категории (объектом учета в данном случае будет официальный сайт). Для разъяснения прочих случаев требуется уточняющая информация.',
  },
  {
    question: 'Как разделить оборудование и инфраструктуру (телефонные аппараты, кабельную проводку, ЛВС, СКС) между внутренней и внешней инфраструктурой (44 и 45КК)?',
    answer: 'К 44 классификационной категории следует отнести оборудование и инфраструктуру, обеспечивающую связь исключительно внутри государственного органа.<br>К 45 классификационной категории следует отнести оборудование и инфраструктуру, обеспечивающую связь вне государственного органа.',
  },
  {
    question: 'Как определить, что система  является государственной информационной системой (ГИС)?',
    answer: 'При отнесении системы к государственной информационной системе, должна присутствовать совокупность следующих критериев:<br>1. Информационная система должна соответствовать определению (ст. 2 149-ФЗ);<br>2.  Основанием создания ГИС являются федеральные законы, законы субъектов Российской Федерации, правовые акты государственных органов (п. 1 ч.1 ст. 13 149-ФЗ);<br>3.  Целями создания ГИС являются реализация полномочий государственных органов и обеспечение обмена информацией между этими органами, а также иные установленные федеральными законами (ч.1 ст. 14 149-ФЗ);<br>4. Государственные информационные системы создаются и эксплуатируются на основе статистической и иной документированной информации, предоставляемой гражданами (физическими лицами), организациями, государственными органами, органами местного самоуправления (ч.3 ст.14 149-ФЗ).<br><b>Следует обратить внимание,</b> что отнесение системы к ГИС остается на усмотрение федерального органа исполнительной власти, направляющего МПИ на согласование.',
  },
  {
    question: 'Кто должен заполнять  электронный паспорт объекта учета, если он разработан центральным аппаратом, но эксплуатируется территориальным органом?',
    answer: 'Орган государственной власти самостоятельно принимает решение, кто будет заполнять электронный паспорт объекта учета. Существует 2 варианта:<br>1 Вариант. Центральный аппарат принимает решение самостоятельно заполнять электронный паспорт объекта.<br>2 Вариант. Центральный аппарат принимает решение о том, что размещение сведений в системе ФГИС КИ осуществляет его территориальный орган.<br>Правила размещения информации во ФГИС КИ представлены в  приказе Минкомсвязи России от 11 февраля 2016 г. N 44.',
  },
  {
    question: 'Что делать если объект учета потерял актуальность?',
    answer: 'В зависимости от объекта учета существуют следующие варианты:<ol><li>Для  информационной системы специальной деятельности - такой ОУ необходимо вывести из эксплуатации соответствии с требованиями Постановления Правительства РФ от 6 июля 2015 г. №676.  Для перевода в статус электронного паспорта ОУ «вывод из эксплуатации», необходимо приложить акт о выводе ИС из эксплуатации и направить на согласование в Минкомсвязь России.</li><li>Для  ИС типовой деятельности, центра обработки данных, типовых компонентов ИТКИ  - такие ОУ необходимо вывести из эксплуатации на основании документов подтверждающих нецелесообразность дальнейшего использования объекта учета.</li><li>Если ОУ ошибочно размещен в системе, ему нужно присвоить статус «в архив» через техническую поддержку ФГБУ «ЦЭКИ»</li><ol>',
  },
  {
    question: 'Как заполнить зардел 6 электронного паспорта объекта учета для мероприятий по информатизации до 300 т.р.,  осуществляемых в соответствии  с пунктом 4 частью 1 статьи 93(44-Ф3)?',
    answer: 'Для заполнения Раздела 6  электронного паспорта объекта учета в рамках мероприятий по информатизации до 300 т.р., необходимо выполнить следующие действия:<ol><li>Подраздел 6.3. Сведения об объявлении торгов и Подраздел 6.4. Сведения о заключенных государственных контрактах не заполняются</li><li>Подраздел 6.5. Сведения об актах сдачи:<ul><li>внесите данные о номере акта сдачи–приемки, стоимости поставленных товаров, выполненных работ и (или) оказанных услуг (тыс. руб.), дате принятия акта;</li><li>Установите индикатор «Закупка реализована контрактом до 300 000 рублей в соответствии с пунктом 4 частью 1 статьи 93(44-Ф3)».</li></ul></li></ol>',
  },
];

console.log(`Длинна массива с вопросами ОУ: ${objecktAccounting.length}.  Должно быть 26`);
console.log(objecktAccounting);

const eventOnInformatization = [
  {
    question: 'Какими нормативными документами следует руководствоваться при создании мероприятия по информатизации на 1 этапе во ФГИС КИ?',
    answer: 'При создании мероприятия по информатизации на 1 этапе следует руководствоваться следующими нормативными документами:<ul><li>Постановление Правительства РФ от 24 мая 2010 г. <b>№ 365</b> «О координации мероприятий по использованию информационно-коммуникационных технологий в деятельности государственных органов» (в редакции ПП Российской Федерации № 392);</li><li>Приказ Министерства связи и массовых коммуникаций Российской Федерации от 31 августа 2016 г. <b>№ 420</b>  «Об утверждении методических рекомендаций, предусмотренных абзацами вторым и пятым пункта 2 постановления Правительства Российской Федерации от 5 мая 2016 г. № 392 «О приоритетных направлениях использования и развития информационно-коммуникационных технологий в федеральных органах исполнительной власти и органах управления государственными внебюджетными фондами и о внесении изменений в некоторые акты Правительства Российской Федерации»;</li><li>Приказ Министерства финансов Российской Федерации от 08 июля 2018 <b>№ 132н</b> (ред. от 30.11.2018) "О Порядке формирования и применения кодов бюджетной классификации Российской Федерации, их структуре и принципах назначения".</li></ul>',
  },
  {
    question: 'Как осуществляется изменение статуса мероприятия по информатизации во ФГИС КИ?',
    answer: 'Перевод (изменение) статуса мероприятия по информатизации осуществляется через функционал «Управление статусами МПИ» ФГИС КИ следующим образом:<ol><li>Открыть МПИ;</li><li>Нажать кнопку «Управление статусом МПИ»;</li><li>В поле «Выберите статус для перевода» из выпадающего списка выбрать соответствующий статус, например, «Отправить на согласование руководителю»;</li><li>Осуществить перевод статуса нажатием на кнопку «1. Подтвердить перевод ЭП».</li></ol>Функционал изменения статуса может быть ограничен в соответствии с ролевой моделью во ФГИС КИ.<br>По вопросам, связанным с ролями в системе, рекомендуем обращаться в техническую поддержку ФГИС КИ.',
  },
  {
    question: 'Какова последовательность действий при заполнении разделов 5 «Сведения об объёмах бюджетных ассигнований» и 6 «Сведения о товарах, работах и услугах» в мероприятиях по информатизации во ФГИС КИ?',
    answer: 'Заполнение разделов 5 «Сведения об объёмах бюджетных ассигнований» и 6 «Сведения о товарах, работах и услугах» в мероприятиях по информатизации происходит посредством взаимодействия систем ФГИС КИ и ГИИС «Электронный бюджет».<br>Для заполнения разделов сведениями важно выполнить следующие действия:<ol><li>Создать МПИ во ФГИС КИ,</li><li>Отправить сведения в ГИИС «Электронный бюджет» путём перевода МПИ в статус «Отправлено в ЭБ».</li><li>Проверить получение данных из ГИИС «Электронный бюджет» в разделах 5 «Сведения об объёмах бюджетных ассигнований» мероприятия по информатизации в системе ФГИС КИ и 6 «Сведения о товарах, работах и услугах»в  мероприятиях по информатизации в ФГИС КИ.</li></ol>По вопросам работы ГИИС «Электронный бюджет» обращаться в техническую поддержку системы.',
  },
  {
    question: 'Какова последовательность действий при получении отрицательного заключения на МПИ?',
    answer: 'При получении отрицательного экспертного заключения на мероприятие по информатизации необходимо выполнить следующие действия:<ol><li>Ознакомиться во ФГИС КИ с полученными замечаниями и рекомендациями, направленными Минкомсвязью (п. 17 Постановления Правительства РФ от 24 мая 2010 г. № 365).</li><li>Доработать МПИ во ФГИС КИ согласно замечаниям и рекомендациям.</li><li>Направить МПИ на экспертизу повторно.</li></ol>',
  },
  {
    question: 'Как доработать мероприятие по информатизации с отрицательным экспертным заключением во ФГИС КИ?',
    answer: 'Доработка мероприятия по информатизации во ФГИС КИ осуществляется следующим образом:<ol><li>Перевести МПИ из статуса «Отрицательное заключение (неутв.)» в статус «Отправлено на доработку» при помощи функционала «Управление статусом МПИ» ФГИС КИ.</li><li>Отредактировать информацию в разделах МПИ. Для изменения информации необходимо нажать на кнопку «Карандаш».</li></ol>',
  },
  {
    question: 'Как посмотреть статус мероприятий по информатизации, прошедших экспертизу, и экспертное заключение на МПИ?',
    answer: 'Статус мероприятий по информатизации и экспертные заключения на МПИ доступны к просмотру в разделе «Мои Мероприятия» ФГИС КИ.<br>Для просмотра статуса МПИ необходимо:<ol><li>Зайти в раздел «Мои Мероприятия» и выбрать соответствующий плановый период, например, 2020-2022.</li><li>Выбрать искомое МПИ на открывшейся странице. В столбце «Статус» будет отражена информация о результатах проведенной экспертизы в одном из вариантов:<br>- «Отрицательное заключение (неутв.)»,<br>- «Положительное заключение» (неутв.)»,<br>- «Положительное заключение».</li><li>Войти в МПИ для просмотра экспертного заключения.</li><li>Нажать кнопку «Скачать». В открывшемся файле будет отражено экспертное заключение с замечаниями и  рекомендациями по доработке МПИ (п.17 Постановления Правительства РФ от 24 мая 2010 г. № 365).</li></ol>',
  },
  {
    question: 'В какие МПИ должны включаться работы по защите информации?',
    answer: 'Работы по защите информации обязательно должны быть запланированы в мероприятиях по информатизации, направленных на государственные информационные системы.<br>Для МПИ, направленных на иные информационные системы, ОГВ самостоятельно определяет необходимость планирования и проведения работ по защите информации с учётом требований законодательства РФ в сфере защиты информации и информационной безопасности.',
  },
  {
    question: 'Какой тип МПИ выбрать при закупке нового монитора для рабочей станции взамен вышедшего из строя?',
    answer: 'Для закупки нового монитора для рабочей станции взамен вышедшего из строя следует применить тип МПИ «Эксплуатация».',
  },
  {
    question: 'Какой тип МПИ выбрать в случае ремонта оборудования рабочей станции?',
    answer: 'В случае ремонта оборудования рабочей станции следует выбирать тип МПИ «Эксплуатация».',
  },
  {
    question: 'Как правильно заполнить поле «Общедоступная информация» в мероприятии по информатизации?',
    answer: 'Поле общедоступная информация заполняется для информационных систем специальной деятельности и для информационных систем типовой деятельности.<br>В поле необходимо указать перечень видов общедоступной информации, сбор, хранение и размещение которой обеспечивается объектом учета в форме открытых данных (наборы открытых данных), а также документ, который подтверждает наличие/отсутствие указанных сведений, в соответствии с приказом Министерства связи и массовых коммуникаций Российской Федерации от 31 августа 2016 г. № 420.',
  },
  {
    question: 'В каком случае нужно заполнять раздел «Документы по информатизации»?',
    answer: 'Раздел «Документы по информатизации» заполняется, если мероприятие по информатизации планируется в рамках <u>проектов</u> нормативно правовых актов.',
  },
  {
    question: 'Можно ли создать мероприятие по информатизации без электронного паспорта объекта учёта?',
    answer: 'Без электронного паспорта объекта учёта технически в системе ФГИС КИ невозможно создать мероприятие по информатизации.<br>В соответствии с постановлением Правительства Российской Федерации от 24 мая 2010 г. № 365, положением постановления Правительства Российской Федерации от 26 июня 2012 г. № 644, Приказом Минкомсвязи России от 31 августа 2016 г. № 420 и приказом Минкомсвязи России № 127 для создания МПИ необходимо:<br>1) Создать ОУ соответствующей классификационной категории (если аналогичный ОУ отсутствует).<br>2) Получить положительное экспертное заключение Минкомсвязи России на ОУ с присвоением ему уникального идентификационного номера.<br>3) Создать МПИ, направленное на объект учёта.',
  },
  {
    question: 'Могут ли быть отнесены на 41 классификационную категорию картриджи для локального принтера, подключенного к рабочей станции?',
    answer: 'Если принтеры и сканеры, размещенные на отдельных рабочих местах, входят в состав рабочей станции, то закупку картриджей можно направить на обеспечение эксплуатации компонента ИТКИ 41 классификационной категории на основании приложения № 1 приказа Министерства связи и массовых коммуникаций № 127',
  },
  {
    question: 'Что делать, если «Документ – основание» мероприятия по информатизации имеет гриф «Секретно»?',
    answer: 'Если «Документ – основание» имеет гриф «Секретно» необходимо:<br>1. В раздел «Документ –основание» соответствующего МПИ необходимо прикрепить реквизиты сопроводительного письма и документа основания имеющего гриф «Секретно»;<br>2. Документ с грифом «Секретно» направить в Минкомсвязь России через первый отдел.<br>Порядок согласования документов по информатизации, относящихся к категории «государственная тайна», прописан:<br>- в Постановлении Правительства Российской Федерации от 24 мая 2010 г. № 365;<br>- в Приказе Минкомсвязи России от 31 августа 2016 г. № 420.',
  },
  {
    question: 'Какие действия нужно совершить,  если при выгрузке из системы «Электронный бюджет» поняли, что в мероприятие по информатизации необходимо внести изменения?',
    answer: 'Существует 2 варианта:<br>1. Если вам необходимо внести только документы и обоснования закупок  – то в статусе МПИ «Обработано в ЭБ» в системе ФГИС КИ в 6 разделе  можно внести эту информацию, сохранить мероприятие и отправить на экспертизу Минкомсвязь России.<br>2. Если необходимо внести более существенные корректировки, например, в части изменения информации по разделам – то процедура усложняется. Необходимо:<br>&emsp;&bull; Перевести МПИ в статус «Доработка» и внести коррективы;<br>&emsp;&bull; Отправить мероприятие  в систему «Электронный бюджет» внести там изменения;<br>&emsp;&bull; Выгрузить мероприятие по информатизации в систему ФГИС КИ;<br>&emsp;&bull; Отправить  мероприятие по информатизации на экспертизу в Минкомсвязь России.',
  },
  {
    question: 'Как получить доступ в систему ФГИС КИ для внесения сведений о  мероприятиях по информатизации?',
    answer: 'Для получения доступа в систему ФГИС КИ для внесения сведений о мероприятиях по информатизации  необходимо:<ol><li>Необходимо зайти на сайт системы www.392.eskigov.ru</li><li>Выбрать поле «Заявка на доступ к  ФГИС КИ»</li><li>Заполнить заявку на доступ во ФГИС КИ</li><li>Прикрепить документы основания для получения роли Куратор или Сотрудник</li><li>Получить доступ во  ФГИС КИ</li></ol>',
  },
  {
    question: 'Возможно, ли изменить в меньшую сторону сумму в согласованной закупке мероприятия по информатизации во ФГИС КИ?',
    answer: 'Да, возможно. Внесение изменений в мероприятие по информатизации осуществляется в соответствии с требованиями Постановления Правительства  Российской Федерации № 365',
  },
  {
    question: 'Как заполнить  мероприятие по информатизации, если контракт переходящий, т.е. действует  12 месяцев с августа по август?',
    answer: 'Для внесения информации в текущем плановом периоде необходимо выполнить следующие действия:<ol><li>Внести закупку в мероприятие на текущий год;</li><li>Приложить  к закупке документы по обоснованию НМЦК с разделением финансирования на 2 года - текущий и последующий. Соответствующие суммы указываете в закупке на текущий и последующий годы;</li><li>Получить положительное заключение на мероприятие по информатизации и заключить государственный контракт</li></ol>На следующий год планового  периода:<ol><li>Приложить заключенный  государственный контракт в мероприятие к аналогичной закупке, в котором также прописаны объёмы финансирования по годам;</li><li>Укажите в закупке сумму финансирования на из государственного контракта.</li></ol>',
  },
  {
    question: 'Как избежать запрета эксплуатации государственной информационной системы при ее развитии с изменением ключевых характеристик?',
    answer: 'Рекомендуется запланировать в мероприятии по информатизации направленного на развитие ИС работы, по анализу необходимости проведения дополнительных аттестационных испытаний по результатам развития системы, в соответствии с пунктом 17 Требований постановления Правительства РФ от 6 июля 2015 г. № 676 и пунктом 17.4 Требований приказа ФСТЭК от 11 февраля 2013 г. № 17.<br>При этом в составе сведений о работе данной комиссии также должны быть предусмотрены сведения о наличии финансирования на аттестацию и ссылка на мероприятие, в котором будет предусмотрена закупка по аттестации в случае выявления комиссией необходимости повторной аттестации.',
  },
  {
    question: 'Какие документы основания необходимо прикрепить в мероприятие по информатизации направленного на создание 10 классификационной категории?',
    answer: 'В мероприятие по информатизации направленного на создание 10 классификационной категории может быть прикреплен один их следующих документов основания:<ul><li>Акты Правительства Российской Федерации и/или Президента Российской Федерации;</li><li>Поручения Правительства Российской Федерации и/или Президента Российской Федерации;</li><li>Правовые акты государственного органа, инициирующие создание объекта учета.</li></ul>Обращаем внимание, что документ основание должен содержать явные требования на создания указанной информационной системы.',
  },
  {
    question: 'Какие документы основания необходимо прикрепить в мероприятие по информатизации направленного на развитие 10 классификационной категории?',
    answer: 'В мероприятии по информатизации направленного на развитие 10 классификационной категории документом - основанием могут быть правовые акты государственного органа, инициирующие развитие объекта учета.',
  },
  {
    question: 'Необходимо ли утверждение плана информатизации приказом руководителя Управления или достаточно утверждения квалифицированной ЭЦП в подсистеме бюджетного планирования ГИИС «Электронный бюджет»?',
    answer: 'Вам необходимо при получении положительного заключения Минкомсвязи России на план информатизации, утвердить его внутренним правовым актом государственного органа.<br>Копия утвержденного плана информатизации в 5-дневный срок со дня его утверждения размещается в электронном виде во ФГИСКИ (за исключением планов информатизации, сведения о которых отнесены к государственной тайне и сведениям конфиденциального характера). Размещение происходит в соответствии с п. 26 правил подготовки планов информатизации государственных органов и отчетов об их выполнении, утверждённых постановлением Правительства Российской Федерации от 24 мая 2010 г. № 365.',
  },
  {
    question: 'Каким образом и в какой срок вносятся изменения в план информатизации?',
    answer: 'Изменения в план по информатизации осуществляются через систему ФГИС КИ. Орган государственной власти самостоятельно принимает решение о корректировке планов по информатизации по мере необходимости, но не позднее 10 декабря года их реализации.   Внесение изменений проводится в соответствии с п. 29 правил подготовки планов информатизации государственных органов и отчетов об их выполнении, утверждённых постановлением Правительства Российской Федерации от 24 мая 2010 г. № 365.',
  },
  {
    question: 'На каком этапе необходимо делать детализацию в мероприятии по информатизации?',
    answer: 'Детализация в мероприятии по информатизации  делается в рамках второго этапа согласования плана информатизации, согласно п. 23 правил подготовки планов информатизации государственных органов и отчетов об их выполнении, утверждённых постановлением Правительства Российской Федерации от 24 мая 2010 г. № 365',
  },
  {
    question: 'Куда нужно прикладывать приказ об утверждении нормативных затрат?',
    answer: 'Приказ об утверждении нормативных затрат  можно разместить в 2 вариантах:<br>1. В мероприятие по информатизации в раздел "Документ-основание". Обращаем ваше внимание, что в этом случае необходимо в закупке, в которой используется для обоснования данный приказ, отразить название документа и где он расположен.<br>2. К каждой закупке, где используются расчеты из приказа об утверждении нормативных затрат.',
  },
  {
    question: 'Как сделать, чтобы в закупке использовался код ОКПД 95.11, а в детализации код ОКПД 34.11?',
    answer: 'В данной ситуации указать код 34.11 технически не получится, т.к. детализация возможна только в пределах выгруженного кода из системы "Электронный бюджет" (95.11).<br>При необходимости создания закупки с кодом, отличным от кода закупки следует создать новую закупку',
  },
  {
    question: 'Какие приоритетные направления необходимо указать при создании мероприятия по информатизации направленного на развитие 10 классификационной категории?',
    answer: 'В мероприятии по информатизации направленного на развитие 10 классификационной категории необходимо указать:<ul><li>1 приоритетное направление «Использование информационно-коммуникационных технологий для оптимизации процедур и повышения качества предоставления государственных услуг и исполнения государственных функций, в том числе с применением механизмов получения от граждан и организаций в электронном виде информации о качестве взаимодействия с федеральными органами исполнительной власти и органами управления государственными внебюджетными фондами»</li><li>4 приоритетное направление «Защита информации, содержащейся в государственных информационных системах, и обеспечение информационной безопасности при использовании информационно-коммуникационных технологий в деятельности федеральных органов исполнительной власти и органов управления государственными внебюджетными фондами».</li></ul>Также рекомендуется рассмотреть возможность отнесения мероприятия к 3 и 5 приоритетным направлениям',
  },
];

console.log(`Длинна массива с вопросами МПИ: ${eventOnInformatization.length}.  Должно быть 18`);
console.log(eventOnInformatization);

const questionPlace = document.querySelector('.question-area');
const questionBlockOu = questionPlace.querySelector('.block-questions_OU');
const questionBlockMpi = questionPlace.querySelector('.block-questions_MPI');

const fragmentOu = document.createDocumentFragment();
for (let i = 0; i < objecktAccounting.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-section');
  question.innerHTML = `
  <div class="question" data-target=".block_OU-answer_${i}">
    ${objecktAccounting[i].question}
  </div>
  <div class="answer block_OU-answer_${i}">
    <span class="answer-word">Ответ:</span>
    ${objecktAccounting[i].answer}
  </div>
  <div class="circle">
    <div class="circle_circle">
      <div class="circle_point">
      </div>
    </div>
  </div>
  `;
  fragmentOu.appendChild(question);
}

const questionListOu = document.createElement('div');
questionListOu.classList.add('questions-list');
questionListOu.appendChild(fragmentOu);
questionBlockOu.appendChild(questionListOu);

const fragmentMpi = document.createDocumentFragment();
for (let i = 0; i < eventOnInformatization.length; i += 1) {
  const question = document.createElement('div');
  question.classList.add('question-section');
  question.innerHTML = `
  <div class="question" data-target=".block_MPI-answer_${i}">
    ${eventOnInformatization[i].question}
  </div>
  <div class="answer block_MPI-answer_${i}">
    <span class="answer-word">Ответ:</span>
    ${eventOnInformatization[i].answer}
  </div>
  <div class="circle">
    <div class="circle_circle">
      <div class="circle_point">
      </div>
    </div>
  </div>
  `;
  fragmentMpi.appendChild(question);
}

const questionListMpi = document.createElement('div');
questionListMpi.classList.add('questions-list');
questionListMpi.appendChild(fragmentMpi);
questionBlockMpi.appendChild(questionListMpi);

const searchPlace = document.querySelector('.search-area');
const searchField = searchPlace.querySelector('.search-field');
const searchButton = searchPlace.querySelector('.search-button');

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const searchValue = searchField.value;
  const regexp = new RegExp(searchValue, 'i');
  console.log(regexp);
  console.log(searchValue);

  const questionSections = questionPlace.querySelectorAll('.question-section');
  console.log(questionSections[0].querySelector('.question').innerHTML);
  console.log(regexp.test(questionSections[0].querySelector('.question').innerHTML));

  for (let i = 0; i < questionSections.length; i += 1) {
    if (regexp.test(questionSections[i].querySelector('.question').innerHTML)) {
      questionSections[i].removeAttribute('hidden');
    } else {
      questionSections[i].setAttribute('hidden', 'hidden');
    }
  }
});
