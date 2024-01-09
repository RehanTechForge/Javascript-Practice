
setInterval(function () {
    var date = new Date();
    var getsec = date.getSeconds();
    var getmin = date.getMinutes();
    var gethour = date.getHours();
    document.write(gethour+':'+getmin+':'+getsec+'<br />')
},1000)