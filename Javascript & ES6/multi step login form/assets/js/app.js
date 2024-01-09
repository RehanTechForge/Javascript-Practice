var allForm = document.querySelectorAll('form');


allForm[0].addEventListener('submit',(event)=>{
    event.preventDefault();
});

allForm[1].addEventListener('submit',(event)=>{
    event.preventDefault();
});

allForm[2].addEventListener('submit',(event)=>{
    event.preventDefault();
});


function formOneFormTwo() {
    allForm[0].style.left='-100%';
    allForm[1].style.left='0%';
}

function formTwoFormThree() {
    allForm[1].style.left='-100%';
    allForm[2].style.left='0%';
}

function formThreeFormTwo() {
    allForm[2].style.left='100%';
    allForm[1].style.left='0%';
}

function formTwoFormOne() {
    allForm[1].style.left='100%';
    allForm[0].style.left='0%';
}

// function form1ToForm2(event){
//     event.preventDefualt();
//     allForm[0].style.left = '-100%';
// }
