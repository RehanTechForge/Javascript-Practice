const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const mainBox = document.querySelector(".main");
const getMovies = async (api) => {
  let response = await fetch(api);
  let data = await response.json();
  showMovies(data.results);
};

const showMovies = (data) => {
    mainBox.innerHTML ='';
  console.log(data);
  data.forEach((item) => {
    let cards = document.createElement("div");
  cards.classList.add("card");
  cards.innerHTML = `
    <img src="${IMGPATH+item.poster_path}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.original_title}</h5>
      <p>Ratings:<span>${item.vote_average}</span></p>
      <p class="card-text">${item.overview}</p>
      
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mainBox.appendChild(cards)
  });
};

document.querySelector('#search').addEventListener('keyup',function (event) {
    if (event.target.value != '') {
        getMovies(SEARCHAPI+event.target.value);
    }else{
        getMovies(APIURL);
    }
});

getMovies(APIURL);
