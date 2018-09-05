'use strict';

var RANDOM = Math.floor(Math.random());

var showSetup = function () {
  var setup = document.querySelector('.setup');

  setup.classList.remove('hidden');
};

showSetup();

var createWizardsArray = function () {
  var wizardsArray = [];
  var wizardsQuality = 4;

  for (var i = 0; i < wizardsQuality; i++) {
    wizardsArray[i] = {
      name: getWizardName(true),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    };
  }
};

var getWizardName = function (mixName) {
  var wizardsNames = [
    [
      'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита',
      'Вашингтон'
    ], ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
      'Нионго', 'Ирвинг']
  ];

  if (mixName) {
    return getRandomElem(wizardsNames[RANDOM]) + ' '
    + getRandomElem(wizardsNames[RANDOM]);
  } else {
    return getRandomElem(wizardsNames[0]) + ' '
    + getRandomElem(wizardsNames[1]);
  }
};

var getRandomElem = function (arr) {
  return RANDOM * arr.length;
};

var getCoatColor = function () {
  var coatColors = [
    'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
  ];

  return getRandomElem(coatColors);
};

var getEyesColor = function () {
  var eyesColor = [
    'black', 'red', 'blue', 'yellow', 'green'
  ];

  return getRandomElem(eyesColor);
};
