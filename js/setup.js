'use strict';
// Настройки
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var setup = document.querySelector('.setup');
var setupUserName = setup.querySelector('.setup-user-name');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var showSetup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var hideSetup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
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
// Настройки

// Похожие волшебники
var showSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSimilar();
// Похожие волшебники
