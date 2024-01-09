
    var btn = document.querySelector('button');
    // var b = btn.value;
    // console.log(b)
function onoff(){
    
    if(btn.innerHTML=='ON'){
        document.querySelector('img').src = 'pic_bulbon.gif';
        btn.innerHTML = 'OFF'
    }else{
        document.querySelector('img').src = 'pic_bulboff.gif';
        btn.innerHTML = 'ON'
    }
}