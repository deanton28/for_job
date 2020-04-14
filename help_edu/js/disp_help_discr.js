const helpArea = document.querySelector('.help_wrapper');
const helpIcon = helpArea.querySelector('.help-icon');
const helpDescription = helpArea.querySelector('.help-description');

helpIcon.addEventListener('click', () => {
  if (helpIcon.classList.contains('close')) {
    helpIcon.classList.remove('close');
    helpDescription.setAttribute('hidden', 'hidden');
  } else {
    helpIcon.classList.add('close');
    helpDescription.removeAttribute('hidden');
  }
});
