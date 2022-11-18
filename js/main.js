/* global data */
/* exported data */

var $api = document.querySelector('.api');

const loggedIn = function () {
  event.preventDefault();
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
};

var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.main-page');
var arrowBtn = document.querySelector('.red-arrow-button');

arrowBtn.addEventListener('click', loggedIn);

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var diffuseModal = document.querySelector('.diffuse');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

diffuseModal.addEventListener('click', openModal);

const reset = function () {
  while ($api.firstChild) {
    $api.removeChild($api.firstChild);
  }
};

var reRoll = document.querySelector('.re-roll');

const rollAgain = function () {
  closeModal();
  reset();
  knifeList();
};

reRoll.addEventListener('click', rollAgain);

function knifeList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    var skinListArray = [];
    skinListArray = xhr.response.data.skins;
    var skinList = skinListArray[Math.floor(Math.random() * skinListArray.length)];
    var knifeName = skinList.displayName;
    var knifeIcon = skinList.displayIcon;

    var $img = document.createElement('img');
    $img.setAttribute('src', knifeIcon);
    $api.appendChild($img);

    var $title = document.createElement('h2');
    $title.textContent = ' "' + knifeName + '" ';
    $api.appendChild($title);

  }

  );
  xhr.send();
}

knifeList();
