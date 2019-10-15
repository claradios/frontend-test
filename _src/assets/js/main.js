'use strict';

const input = document.querySelector('.main__input-search');
const btn = document.querySelector('.main__btn-search');
const userContainer = document.querySelector('.main__user_container');




// function callApi() {
//   fetch(`https://api.github.com/users/${input.value}`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// }

function showResults() {

  fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const newSpan = document.createElement('span');
      const newTitle = document.createElement('h2');
      const newImg = document.createElement('img');
      const newText = document.createElement('p');

      const userName = document.createTextNode(`@${data.login}`);
      const name = document.createTextNode(data.name);
      const bio = document.createTextNode(data.bio);

      newImg.src = data.avatar_url;

      newSpan.appendChild(userName);
      newTitle.appendChild(name);
      newText.appendChild(bio);

      userContainer.appendChild(newTitle);
      userContainer.appendChild(newText);
      userContainer.appendChild(newImg);

    });

}

btn.addEventListener('click', showResults);


