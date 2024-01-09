var clutter = '';
var mainB = document.querySelector('.main_bottom');
let rn;
var hitBtn = document.querySelector('.hit');
var score = 0;


for (let index = 0; index <= 219 ; index++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class="item">${rn}</div>`;  
}
mainB.innerHTML = clutter;

function hitBubble() {
    hitBtn.innerHTML = rn;
}
let timer = 60;
function runTimer() {
    var stopTime = setInterval(()=>{
        if (timer>0) {
            timer--;
        document.querySelector('.time').innerHTML = timer;
        }else{
            clearInterval(stopTime);
            mainB.innerHTML = `<h1>Game End!</h1>`;
            mainB.style.alignItems='center';
            mainB.style.flexDirection='column'
            var span = document.createElement('span');
            mainB.appendChild(span);
            span.innerHTML = "Your Score Is:"+score;
            span.style.background='#476847';
            span.style.padding='10px 15px';
            span.style.color='white'
            span.style.borderRadius='4px'
        }
    },1000);
}

function increaseScore() {
    score = score+10;
    document.querySelector('.score').innerHTML = score;
}

mainB.addEventListener('click',(event)=>{
    if (hitBtn.innerHTML==event.target.innerHTML) {
        increaseScore();
        document.querySelector('.hit').innerHTML = Math.floor(Math.random() * 10);
    }
});



runTimer();
hitBubble();


