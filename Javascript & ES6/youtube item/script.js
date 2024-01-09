
function addCards(cimage,ctitle,cname,cviews,cmonth) {
    var container = document.querySelector('.container');
    var cards = document.createElement('div');
    container.appendChild(cards);
    var img = document.createElement('img');
    cards.appendChild(img);
    img.src = cimage;
    img.classList.add('myImage');
    var cardsDetail = document.createElement('div');
    cardsDetail.classList.add('cardsDetails');
    cards.appendChild(cardsDetail);
    var cardsBottom = document.createElement('div');
    cardsDetail.appendChild(cardsBottom)
    var h3 = document.createElement('h3');
    h3.innerHTML = ctitle;
    cardsBottom.appendChild(h3);
    var cName = document.createElement('span');
    cName.innerHTML = cname
    cardsBottom.appendChild(cName);
    var views = document.createElement('span');
    views.innerHTML = cviews;
    cardsBottom.appendChild(views);
    var month = document.createElement('span');
    month.innerHTML = cmonth;
    cardsBottom.appendChild(month);
}
function convert(labelValue) {
    const absValue = Math.abs(Number(labelValue));

    if (absValue >= 1.0e+9) {
        return (absValue / 1.0e+9) + "B";
    } else if (absValue >= 1.0e+6) {
        return (absValue / 1.0e+6) + "M";
    } else if (absValue >= 1.0e+3) {
        return (absValue / 1.0e+3) + "K";
    } else {
        return absValue;
    }
}
addCards("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1","CodeWithHarry",convert(200000),"2 month ago");

addCards("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #2","CodeWithHarry",convert(100000),"1 month ago");

addCards("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #3","CodeWithHarry",convert(78000),"2 weeks ago");
