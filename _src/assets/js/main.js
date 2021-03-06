'use strict';

const input = document.querySelector('.main__input-search');
const btn = document.querySelector('.main__btn-search');
const userContainer = document.querySelector('.main__user_container');
const reposTitle = document.querySelector('.main__repos_title');
const reposList = document.querySelector('.main__repos_list');
const reposContainer = document.querySelector('.main__repos_container');
const USER_ENDPOINT = 'https://api.github.com/users/';


function createUserElements(login, name, bio, avatar) {
  userContainer.innerHTML = '';

  const newImgContainer = document.createElement('div');
  const newImg = document.createElement('img');

  const newBioContainer = document.createElement('div');
  const newSpan = document.createElement('span');
  const newTitle = document.createElement('h2');
  const newText = document.createElement('p');

  const userLogin = document.createTextNode(`@${login}`);
  const userName = document.createTextNode(name);
  const userBio = document.createTextNode(bio);

  newImgContainer.className = 'user__picture';
  newImg.className = 'picture__img';
  newBioContainer.className = 'user__bio-info';

  newSpan.appendChild(userLogin);
  newTitle.appendChild(userName);
  newText.appendChild(userBio);
  newImg.src = avatar;

  newImgContainer.appendChild(newImg);
  newBioContainer.appendChild(newSpan);
  newBioContainer.appendChild(newTitle);
  newBioContainer.appendChild(newText);

  userContainer.appendChild(newImgContainer);
  userContainer.appendChild(newBioContainer);
}

function createErrorMessage() {
  userContainer.innerHTML = '';
  reposList.innerHTML = '';
  reposTitle.innerHTML = '';
  reposContainer.classList.add('hidden');
  const errorText = document.createElement('p');
  const errorMessage = document.createTextNode('Does not exist');
  errorText.appendChild(errorMessage);
  userContainer.appendChild(errorText);
  errorText.classList = 'error__message';
}

function showResults() {

  const query = input.value;

  fetch(USER_ENDPOINT + query)
    .then(response => response.json())
    .then(data => {
      if (data.name === undefined) {
        createErrorMessage();
      } else {
        createUserElements(data.login, data.name, data.bio, data.avatar_url);
      }
    });

  showRepos(query);
}

function showRepos(query) {
  const REPOS_ENDPOINT = `https://api.github.com/users/${query}/repos`;
  fetch(REPOS_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let acc = '';
      for (const item of data) {
        acc += `<li class="repo_item">
                  <h3 class="repo_title">${item.name}</h3>
                  <div class="repo_counter-box">
                      <div>
                          <span><i class="fas fa-star"></i></span>
                          <span>${item.forks_count}</span>
                      </div>
                      <div>
                          <span><i class="fas fa-code-branch"></i></span>
                          <span> ${item.stargazers_count}</span>
                      </div>
                  </div>
                </li>`;
      }

      reposContainer.classList.remove('hidden');
      reposTitle.innerHTML = 'Repositories';
      reposList.innerHTML = acc;
    });
}

function pressEnter(event) {
  if (event.key === 'Enter') {
    showResults();
  }
}

btn.addEventListener('click', showResults);
document.addEventListener('keyup', pressEnter);

