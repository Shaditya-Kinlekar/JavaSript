'use strict';

const requestUrl = 'https://randomuser.me/api/';

const profile = document.getElementById('profile-image');
const userFullName = document.getElementById('user-name');

const userProfile = function (data) {
  const avatarUrl = data.picture.large;
  profile.setAttribute('src', `${avatarUrl}`);
};

const fullName = function (data) {
  const firstName = data.name.first;
  const lastName = data.name.last;
  userFullName.textContent = `${firstName} ${lastName}`;
};

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.response).results[0];
    console.log(data);
    userProfile(data);
    fullName(data);
  }
};
xhr.send();
