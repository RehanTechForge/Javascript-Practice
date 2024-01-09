//alert("hi")
function calc(val){
    //console.log(val)
    var inputObj = document.querySelector('input');
    inputObj.value +=val
}

function eq(){
    document.querySelector('input').value = eval(document.querySelector('input').value)
}

function clr(){
    document.querySelector('input').value = '';
}

function clre(){
    var obj = document.querySelector('input');
    //alert(obj.value);
    var inp = obj.value;
    //alert(inp)
    document.querySelector('input').value = inp.slice(0,inp.length -1)
}

// function mod(val,val){
//     console.log(Number(val)%Number(val))
//     //document.querySelector('input').value += eval(document.querySelector('input').value)
// }