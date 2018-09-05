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
      eyesColor: wizardsEyesColor
    }
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

  var getRandomWizardName = function (arr) {
    return RANDOM * arr.length;
  };

  if (mixName) {
    return getRandomWizardName(wizardsNames[RANDOM]) + ' '
    + getRandomWizardName(wizardsNames[RANDOM]);
  } else {
    return getRandomWizardName(wizardsNames[0]) + ' '
    + getRandomWizardName(wizardsNames[1]);
  }
};

var getCoatColor = function () {
  var coatColors = [
    'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
  ];

  return coatColors[RANDOM];
};
