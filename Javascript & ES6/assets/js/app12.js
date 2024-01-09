user = [];
var send = ()=>{
    var x = document.getElementById('name').value;
    var  y = document.getElementById('pass').value;

    var obj = {
        name : x,
        pass : y,
    }

    //console.log(obj)
    user = user + JSON.stringify(obj)
    localStorage.setItem('users',user)
    //localStorage.setItem('user',obj.pass)

}
