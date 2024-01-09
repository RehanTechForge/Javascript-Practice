function mysubmit(e){
    var obj = [
        {
            'Name':'Rehan',
            'Email':'rehan@gmail.com',
            'pass':'123'
        },
        {
            'Name':'Usman',
            'Email':'usman@gmail.com',
            'pass':'123'
        },
        {
            'Name':'Asghar',
            'Email':'asghar@gmail.com',
            'pass':'123'
        }
    ]
    e.preventDefault();
    localStorage.setItem('Obj',obj);
    var a = localStorage.getItem('Obj');
    console.log(a);
}