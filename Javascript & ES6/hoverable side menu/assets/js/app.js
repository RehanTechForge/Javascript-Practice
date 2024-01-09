var menu = document.querySelector('.mainmenu');
var nav = document.querySelector('.nav');

function expand() {
    nav.classList.toggle('open');
    var d = document.querySelectorAll('.list-item');
    var r = document.querySelectorAll('li');

    r.forEach((curelem)=>{
        curelem.classList.toggle('ad');
    });
    d.forEach((curelem)=>{
        curelem.classList.toggle('add');
    });

    if(menu.classList.contains('q')){
        menu.classList.remove('q');
        document.querySelector('.menu').innerHTML = 'X';
    }else{
        document.querySelector('.menu').innerHTML = '<i class="fa-solid fa-bars icon"></i>';
        menu.classList.toggle('q');
    }
}