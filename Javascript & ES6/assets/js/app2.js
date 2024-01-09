function demo(){
    var semail = document.getElementById('semail');
    var spass = document.getElementById('spass');

    localStorage.setItem('Email',semail.value);
    localStorage.setItem('Password',spass.value);

    location.href = 'demo46.html'
    // if(localStorage.getItem('Email') == semail.value && localStorage.getItem('Password') == spass.value){
        
    //     location.href = 'demo46.html';
    // }else{
        
    //     location.href = 'demo45.html';
    // }
}

function login(){
    var semail = document.getElementById('semail');
    var spass = document.getElementById('spass');

    if(localStorage.getItem('Email') == semail.value && localStorage.getItem('Password') == spass.value){
        alert('welcome user')
        location.href = 'welcome.html';
    }else{
        alert('invalid user')
        location.href = 'demo45.html';
    }
}