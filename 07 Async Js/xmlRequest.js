'use strict';

const requestUrl = 'https://randomuser.me/api/';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.response);
        console.log(data.results[0]);
    }
};
xhr.send();