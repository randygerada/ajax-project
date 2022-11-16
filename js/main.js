/* function knifeList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    skinListArray = xhr.response.data.skins;

    console.log(skinListArray);
    for (var i = 0; i < skinListArray.length; i++) {
      var userName = document.createElement('li');
      userName.textContent = skinListArray[i].displayName;

      userList.appendChild(userName);
    }

  });
  xhr.send();
}
*/
