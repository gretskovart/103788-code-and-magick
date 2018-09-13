'use strict';

var WIZARDS_QUANTITY = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupUserName = setup.querySelector('.setup-user-name');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var hideSetupFireballWrap = setupFireballWrap.querySelector('input');

var showSetup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var hideSetup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

var showSimilar = function () {
  setup.querySelector('.setup-similar').classList.remove('hidden');
};

var getWizardName = function (mixName) {
  var wizardsNames = [
    [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ], ['да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг']
  ];

  var getRandomInteger = function () {
    return Math.round(Math.random());
  };

  if (mixName) {
    return getRandomElem(wizardsNames[getRandomInteger()]) + ' ' +
    getRandomElem(wizardsNames[1 - getRandomInteger()]);
  } else {
    return getRandomElem(wizardsNames[0]) + ' ' + getRandomElem(wizardsNames[1]);
  }
};

var getRandomElem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getCoatColor = function () {
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  return getRandomElem(coatColors);
};

var getEyesColor = function () {
  var eyesColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  return getRandomElem(eyesColor);
};

var getFireballColor = function () {
  var fireballColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  return getRandomElem(fireballColor);
};

var createWizardsArray = function (index) {
  var wizardsArray = [];

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    wizardsArray[i] = {
      name: getWizardName(true),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    };
  }

  return wizardsArray[index];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addFragmentsToPage = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    fragment.appendChild(renderWizard(createWizardsArray(i)));
  }

  similarListElement.appendChild(fragment);
};

addFragmentsToPage();
showSimilar();

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
    hideSetup();
  }
};

setupOpen.addEventListener('click', showSetup);
setupClose.addEventListener('click', hideSetup);

// не работает
setupOpen.addEventListener('focus', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showSetup();
  }
});

// не работает
setupClose.addEventListener('focus', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideSetup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getCoatColor();
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getEyesColor();
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.backgroundColor = getFireballColor();
  hideSetupFireballWrap.setAttribute('value', getFireballColor());
});
