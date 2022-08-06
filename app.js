
const API_KEY = config.SECRET_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key='+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?&api_key='+API_KEY;

//Get Started Button
const getStartedButton = document.querySelector('.show-movies');

//Get movie list
const moviesList = document.querySelector('.movies-list');

//get form
const form = document.querySelector('.form');
const search = document.querySelector('.search');

getStartedButton.addEventListener('click', showMovies);


//hide movies section
document.querySelector('.movies-content').style.display = 'none';

function showMovies(){
  
  //hide landing page
  document.querySelector('.index-content').style.display = 'none';

  //show movies page
  document.querySelector('.movies-content').style.display = 'block';

  //call movies api
  getMovies(API_URL);
}

function getMovies(url){
  fetch(url).then(res => res.json()).then(data => {
    displayMovies(data.results);
  })
}


//display movies
function displayMovies(data){
  moviesList.innerHTML = '';
  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    const movieInformation = document.createElement('div');
    movieInformation.classList.add('movie-info');
    movieInformation.innerHTML = `
    <img src="${IMG_URL + poster_path }" alt="${title}">
        <div class="movie-name">
          <h2>${title}</h2>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>
    `
    moviesList.appendChild(movieInformation);
  })
}


function getColor(vote){
  if(vote >= 8){
    return 'green';
  }else if(vote < 8 && vote >= 6){
    return 'orange';
  }else{
    return 'red';
  }
}


//search movies
document.addEventListener('submit', (e) => {

  const searchInput = search.value;

  if(searchInput){
    getMovies(searchURL + '&query=' + searchInput);
  }


  e.preventDefault();
})