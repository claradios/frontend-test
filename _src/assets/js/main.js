'use strict';

const input = document.querySelector('.main__input-search');
const btn = document.querySelector('.main__btn-search');
const container = document.querySelector('.main__user_container');

function callApi() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

function showResults() {
  callApi();
}

btn.addEventListener('click', showResults);


