const ceki = document.querySelector('.contacts-ceki');
const region = document.querySelector('.contacts-region');
const contactsPlase = document.querySelector('.contacts-ceki_wrapper');

// ----Ф-ция рендерящая карточки контактов для ЦЭКИ
const renderContactsCeki = function (array) {
  const fragmentCeki = document.createDocumentFragment();
  array.forEach(function (item) {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'ceki');
    newElement.innerHTML = '<table><tbody><tr><td class="foto test" rowspan="4"><img src="' + item.foto + '" alt="Фото"></td><td class="text name" colspan="2"><a target="_blank" href="/chat/default.html">' + item.name + '</a></td></tr><tr><td class="text position" colspan="2">' + item.position + '</td></tr><tr><td class="ico"><img src="' + window.cekiContacts.linkForWebtutor + 'icon/ico_tel.svg" alt="Иконка телефона"></td><td class="text contact">' + item.phone + '</td></tr><tr><td class="ico"><img src="' + window.cekiContacts.linkForWebtutor + 'icon/ico_mail.svg" alt="Почта иконка"></td><td class="text contact"><a href="mailto:' + item.email + '">' + item.email + '</a></td></tr><tr><td class="text question" colspan="3">' + item.question + '</td></tr></tbody></table>';
    fragmentCeki.appendChild(newElement);
  });
  contactsPlase.appendChild(fragmentCeki);
};

const popup = document.querySelector('.contact-popup');

// ----Ф-ция рендерящая карточки контактов для Регионов

const renderRegionContactsCard = function (arr) {
  console.log(arr);
  const fragmentContactRegion = document.createElement('div');
  fragmentContactRegion.classList.add('wrapper');
  if (!arr) {
    fragmentContactRegion.innerHTML = 'НЕТ ДАННЫХ О КОНТАКТАХ';
    console.log(fragmentContactRegion);
    return fragmentContactRegion;
  }
  arr.forEach(function (item) {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'ceki');
    newElement.innerHTML = '<table><tbody><tr><td class="foto" rowspan="4"><img alt="Фото" src="' + item.photo + '" /></td><td class="text name" colspan="2"><a target="_blank" href="/chat/default.html">' + item.name + '</a></td></tr><tr><td class="text position" colspan="2">' + item.position + '</td></tr><tr><td class="ico"><img alt="Иконка телефона" src="' + window.cekiContacts.linkForWebtutor + 'icon/ico_tel.svg" /></td><td class="text contact">' + item.phone + '</td></tr><tr><td class="ico"><img alt="Почта иконка" src="' + window.cekiContacts.linkForWebtutor + 'icon/ico_mail.svg" /></td><td class="text contact"><a href="mailto:' + item.email + '">' + item.email + '</a></td></tr></tbody></table>';
    fragmentContactRegion.appendChild(newElement);
  });
  return fragmentContactRegion;
};

// renderRegionContactsCard(regionContactsList[1].contacts);

// ----Ф-ция рендерящая карточки контактов для Регионов
const renderContactsRegion = function (array) {
  const fragmentRegion = document.createDocumentFragment();
  array.forEach(function (item) {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'region');
    newElement.innerHTML = '<img class="coat" src="' + item.picture + '" alt="Герб региона" id ="' + item.code + '"><span class="region-name">' + item.name + '</span>';
    newElement.addEventListener('click', function (evt) {
      console.log(evt.target.id);
      popup.removeAttribute('hidden');
      const contactWindow = document.createElement('div');
      contactWindow.classList.add('contactWindow');
      // ----Ищем массив с нужным кодом------
      const index = window.regionData.regionDataList.findIndex((el) => el.code === evt.target.id);
      console.log(index);
      // ------------------------------------
      contactWindow.innerHTML = '<div class="region-logo_wrapper"><p class="title title_lite-gray">МОЙ РЕГИОН</p><table><tr><td class="coat"><img src="' + item.picture + '"></td><td class="name"><b>' + item.name + '</b></td></tr></table><table><tr><td class="plase title_lite-gray">МЕСТО В РЕЙТИНГЕ</td><td class="title_lite-gray">ИНДЕКС</td></tr><tr><td class="index">( ' + item.place + ' )</td><td class="index">( ' + item.index + ' )</td></tr></table></div>';
      contactWindow.appendChild(renderRegionContactsCard(item.contacts));
      contactWindow.innerHTML += '<div class="close">X</div>';
      console.log(contactWindow);
      popup.appendChild(contactWindow);
      const close = contactWindow.querySelector('.close');
      close.addEventListener('click', function() {
        popup.innerHTML = '';
        popup.setAttribute('hidden', 'hidden');
      });
    });
    fragmentRegion.appendChild(newElement);
  });
  contactsPlase.appendChild(fragmentRegion);
};

renderContactsCeki(window.cekiContacts.cekiContactsList);

const switcher = document.querySelector('.switcher');

const renderContacts = function (evt) {
  contactsPlase.innerHTML = '';
  if (evt.target.id === 'button-ceki') {
    ceki.classList.add('active');
    region.classList.remove('active');
    renderContactsCeki(window.cekiContacts.cekiContactsList);
  }
  if (evt.target.id === 'button-region') {
    region.classList.add('active');
    ceki.classList.remove('active');
    renderContactsRegion(window.regionData.regionDataList);
  }
};

switcher.addEventListener('click', function (evt) {
  renderContacts(evt);
});
