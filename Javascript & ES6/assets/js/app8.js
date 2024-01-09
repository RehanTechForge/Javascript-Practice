
var obj = {
    fName : 'Muhammad',
    lName : 'Rehan',
    arr   : ['asghar',false,10,12.5]
}

var array = Object.values(obj);


var sarr = array.flat(Infinity)

for (const iterator of sarr) {
    const element = iterator;
    document.write(element)
}













// for (const key in array) {

//     for(var b in array.arr){
//         document.write(array[key][b])
//     }
    
// }

// console.log(array)

// for (let index = 0; index < array.length; index++) {
// //     for(var b = 0; b<array.arr.length;b++){
// //     document.write(array[index][b]);
// // }
    
// }

















//console.log(arr);

// for (const iterator of arr) {
//     document.write(iterator);
    
// }


// for(var key in obj){
//     document.write(obj[key]);
   
    // document.write(obj.fName+obj.lName)
    // for(var j in obj.arr){
    //     document.write(obj.arr[j]);
    // }
// }





















// var obj = [
//     {
//         fName : 'Muhammad',
//         lName : 'Rehan'
//     },
//     'asghar',
//     false,
//     10,
//     12.4
// ]
// for(var key in obj){
//     i=0;
//     i++
//     document.write(obj[key],"<br />",obj.arr
//     ,"<br />");
// }
// obj.arr.forEach(function(val){
//     document.write(val)
// });
// for(var i in obj){
//     document.write(obj[i],'<br />') 
//     delete obj.arr
// }


// obj.forEach(function(val){
//     document.write(val)
// });

// obj.arr.forEach(value => {
//     document.write(value)
// });