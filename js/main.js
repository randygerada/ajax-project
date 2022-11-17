/* global data */
/* exported data */

/* queryselector-api */

var $api = document.querySelector('.api');

/* login page */

var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.main-page');
var arrowBtn = document.querySelector('.red-arrow-button');

const loggedIn = function () {
  event.preventDefault();
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
};

arrowBtn.addEventListener('click', loggedIn);
/* function login(event) {
  event.preventDefault();
  var account = {};
  account.userName = form.elements.uname.value;
  account.passWord = form.elements.psw.value;
  account.entryId = data.nextEntryId;
  data.nextEntryId++;

  form.reset();

}

var form = document.querySelector('.form');
form.addEventListener('submit', login); */

/* modal */
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

/* api */

function knifeList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    /* information from API */
    var skinListArray = [];
    skinListArray = xhr.response.data.skins;
    var skinList = skinListArray[Math.floor(Math.random() * skinListArray.length)];
    var knifeName = skinList.displayName;
    var knifeIcon = skinList.displayIcon;

    var $img = document.createElement('img');
    $img.setAttribute('src', knifeIcon);
    $api.appendChild($img);

    var $title = document.createElement('p');
    $title.textContent = ' "' + knifeName + '" ';
    $api.appendChild($title);

  }

  );
  xhr.send();
}

knifeList();
