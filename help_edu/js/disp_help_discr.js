console.log('check');

const helpArea = document.querySelector('.help_wrapper');
console.log(helpArea);
const helpIcon = helpArea.querySelector('.help-icon');
console.log(helpIcon);
const helpDescription = helpArea.querySelector('.help-description');
console.log(helpDescription);

helpIcon.addEventListener('click', () => {
  if (helpIcon.classList.contains('close')) {
    helpIcon.classList.remove('close');
    helpDescription.setAttribute('hidden', 'hidden');
  } else {
    helpIcon.classList.add('close');
    helpDescription.removeAttribute('hidden');
  }
});
