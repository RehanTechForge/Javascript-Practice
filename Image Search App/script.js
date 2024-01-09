const apiKey = "iSN2yxrP1gqf5zTFc0Q1yGPnDXlL2JWiagL2p2WXtSo";
const url = 'https://api.unsplash.com/search/photos?page='

const searchForm = document.querySelector("form");
const searchBox = document.querySelector("input");
const searchbutton = document.querySelector("button");
let page = 1

window.addEventListener('load',searchImages('art'))

async function searchImages(query) {
    const response = await fetch(`${url}${page}&per_page=12&query=${query}&client_id=${apiKey}`);
    const data = await response.json();
    bindData(data.results)
}
function bindData(results) {
    let searchresults = document.querySelector('.search-results');
    searchresults.innerHTML = '';
    results.forEach(image => {
        searchresults.innerHTML += `<img src="${image.urls.small}">`;
    });
}
searchbutton.addEventListener('click',function () {
    searchImages(searchBox.value);
})
