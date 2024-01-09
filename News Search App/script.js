const apiKey = 'd11ebd47563349378f13933311e732ce'
const url = 'https://newsapi.org/v2/everything?q='
window.addEventListener('load',fetchNews('Pakistan'))
async function fetchNews(query) {
    let res = await fetch(`${url}${query}&apiKey=${apiKey}`);
    let data = await res.json()
    bindData(data.articles)
}

function reload() {
    window.location.reload();
}

function bindData(articles) {
    let cardsContainer = document.getElementById('cards-container');
    let newsCardTemplate = document.getElementById('template-news-card');
    cardsContainer.innerHTML = '';
    articles.forEach(article => {
        if (!article.urlToImage) return;
        let cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article)
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone,article) {
    const newsImage = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newDesc = cardClone.querySelector('#news-desc');
    newsImage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString('en-US',{
        timeZone:'Asia/Karachi'
    })
    newsSource.innerHTML = `${article.source.name} . ${date}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,'_blank')
    })
}

let curSelectedElem = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedElem?.classList.remove('active');
    curSelectedElem = navItem;
    curSelectedElem.classList.add('active')
}

const searchButton = document.getElementById('search-button')
const searchText = document.getElementById('search-text')

searchButton.addEventListener('click',()=>{
    const query = searchText.value;
    if(!query) return;
    fetchNews(query)
    curSelectedElem?.classList.remove('active');
    curSelectedElem = null
})