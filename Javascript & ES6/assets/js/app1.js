var inputObj = document.querySelector('input');

function calc(val){
    //console.log(val)
    inputObj.value = inputObj.value+val;
}
function eq(){
    inputObj.value = eval(inputObj.value).toFixed(2);
}
function clr(){
    inputObj.value = '';
}
function clre(){
    var obj = inputObj.value;
    inputObj.value = obj.slice(0,obj.length -1);
    
    
}