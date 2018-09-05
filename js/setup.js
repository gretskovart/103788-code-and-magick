'use strict';

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
      coatColor: wizardsCoatColor,
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
  var random = Math.floor(Math.random());

  var getRandomWizardName = function (arr) {
    return random * arr.length;
  };

  if (mixName) {
    return getRandomWizardName(wizardsNames[random]) + ' '
    + getRandomWizardName(wizardsNames[random]);
  } else {
    return getRandomWizardName(wizardsNames[0]) + ' '
    + getRandomWizardName(wizardsNames[1]);
  }
};
