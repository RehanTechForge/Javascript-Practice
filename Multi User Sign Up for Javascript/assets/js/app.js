function myToggle(){
    var myToggle = document.querySelector('.menu');
    myToggle.classList.toggle('toggle');
}
var alluser = []

var user = localStorage.getItem('users');
var email = document.getElementById('email');
if(user !== null){
    alluser = JSON.parse(user);
}

// var b = alluser.filter(function(data){
//     return data.email
// })

// if(b === email.value){
//     alert('already register')
// }
var name = document.getElementById('name');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('cpass');
const signin = () =>{
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('cpass');
    
    obj = {
        name : name.value,
        email : email.value,
        pass : pass.value,
        cpass : cpass.value,
    }
    alluser.push(obj);
    


    localStorage.setItem('users',JSON.stringify(alluser));

    location.href = 'login.html'

}

//document.write(localStorage.getItem('users'))

const login = () =>{
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    var filterUser = alluser.filter(function(data){
        return data.email === email && data.pass === pass;
    })
    console.log(filterUser);
    if (filterUser.length) {
        alert('user found');
        location.href = 'index.html';
    }else{
        alert('user not found');
    }

}