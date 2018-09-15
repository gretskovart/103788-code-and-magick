'use strict';
// Настройки
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setup = document.querySelector('.setup');
var setupUserName = setup.querySelector('.setup-user-name');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var hideSetupFireballWrap = setupFireballWrap.querySelector('input');

window.getRandomElem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

window.getCoatColor = function () {
  var coatColors = [
    'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
  ];

  return window.getRandomElem(coatColors);
};

window.getEyesColor = function () {
  var eyesColor = [
    'black', 'red', 'blue', 'yellow', 'green'
  ];

  return window.getRandomElem(eyesColor);
};

var showSetup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var hideSetup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

var getFireballColor = function () {
  var fireballColor = [
    '#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'
  ];

  return window.getRandomElem(fireballColor);
};

setupOpen.addEventListener('click', showSetup);
setupClose.addEventListener('click', hideSetup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showSetup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideSetup();
  }
});

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
    hideSetup();
  }
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = window.getCoatColor();
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = window.getEyesColor();
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.backgroundColor = getFireballColor();
  hideSetupFireballWrap.setAttribute('value', getFireballColor());
});
// Настройки

// Похожие волшебники
var showSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSimilar();
// Похожие волшебники
