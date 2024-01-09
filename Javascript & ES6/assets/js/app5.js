var d = new Date();
var p =prompt('enter your dob:','Day Month Year');
// alert(p)
var m = d.getTime();



var date = new Date();
var getmili = date.getTime();
// document.write(getmili);
var dobmilli = new Date(p);
var mymilli = dobmilli.getTime();
// document.write(mymilli);
if(mymilli>getmili){
    alert('invalid age')
}else{
var minus = getmili-mymilli;
// document.write(minus)
var formula = minus / (1000 * 60 * 60 * 24 * 365);
document.write('your dob is : '+Math.floor(formula));
}
