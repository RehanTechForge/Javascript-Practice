function signin(){
    var name = document.getElementById('sname').value;
    var email = document.getElementById('semail').value;
    var pass = document.getElementById('spass').value;
    var cpass = document.getElementById('scpass').value;

    if(pass == cpass){
        localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Password',pass);
    localStorage.setItem('Confirm Password',cpass);
    location.href = 'login.html';
    }else{
        alert('check your password')
    }

}

function login(){
    var email = document.getElementById('lemail').value;
    var pass = document.getElementById('lpass').value; 

    if(localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass){
        alert('welcome user');
        location.href = 'home.html';
    }else{
        alert('invalid user');
        location.href = 'signin.html';
    }
}

function logout(){
    localStorage.clear();
    
    alert('are you logout')
    

    location.href = 'signin.html';
}