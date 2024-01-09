function guessNum(val){
    //console.log(val)
    var num = (Math.random() * 4)+1;
var genNum = Math.floor(num);
document.querySelector('span').innerHTML = genNum;
document.querySelector('.span').innerHTML = val;
document.getElementById('w').currentTime=0;
        document.getElementById('l').currentTime=0;

    if(genNum == val){
        document.getElementById('numberInput').value = 'Congratulation You Won Game!';
        document.getElementById('numberInput').style.color = 'green';
        document.getElementById('w').play();
        document.getElementById('l').pause();
    }else{
        document.getElementById('numberInput').value = 'Oops! Sorry';
        document.getElementById('numberInput').style.color = 'red';
        document.getElementById('w').pause();
        document.getElementById('l').play();
    }
    
}
