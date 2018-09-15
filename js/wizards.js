'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;

  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  var createWizardsArray = function (index) {
    var wizardsArray = [];

    var getRandomInteger = function () {
      return Math.round(Math.random());
    };

    var getWizardName = function (mixName) {
      var wizardsNames = [
        ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
      ];

      if (mixName) {
        return window.getRandomElem(wizardsNames[getRandomInteger()]) + ' ' +
        window.getRandomElem(wizardsNames[1 - getRandomInteger()]);
      } else {
        return window.getRandomElem(wizardsNames[0]) + ' ' +
        window.getRandomElem(wizardsNames[1]);
      }
    };

    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      wizardsArray[i] = {
        name: getWizardName(true),
        coatColor: window.getCoatColor(),
        eyesColor: window.getEyesColor()
      };
    }

    return wizardsArray[index];
  };

  var renderWizard = function (wizard) {

    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  for (var i = 0; i < WIZARDS_QUANTITY; i++) {
    fragment.appendChild(renderWizard(createWizardsArray(i)));
  }

  similarListElement.appendChild(fragment);
}());
