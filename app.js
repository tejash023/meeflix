const BASE_URL = 'http://127.0.0.1:5500';

//button
const getStartedButton = document.querySelector('.show-movies');

getStartedButton.addEventListener('click', showMovies);

document.querySelector('.index-content').style.display = 'none';

function showMovies(){
  // console.log(BASE_URL + '/movies.html');
  // window.location.href = BASE_URL + '/movies.html';
  document.querySelector('.index-content').style.display = 'none';
}