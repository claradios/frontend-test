'use strict';

const input = document.querySelector ('.main__input-search');
const btn = document.querySelector('.main__btn-search');
const container = document.querySelector('.main__user_container');

function showResults(){
  console.log(input,container);
}

btn.addEventListener('click',showResults);


