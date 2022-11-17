
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var diffuseModal = document.querySelector('.diffuse');
var closeBtn = document.querySelector('.btn-close');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

diffuseModal.addEventListener('click', openModal);

function knifeList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    /* information from API */
    // var skinListArray = [];
    // skinListArray = xhr.response.data.skins;
    // var skinList = skinListArray[Math.floor(Math.random() * skinListArray.length)];

    // var knifeName = skinList.displayName;
    // var imgKnife = skinList.displayIcon;

  }

  );
  xhr.send();
}

knifeList();
