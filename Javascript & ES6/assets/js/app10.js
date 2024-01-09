11
var arr = [
    {
        name : "rehan",
        fname : "usman",
    },
    {
        name : "rehan",
        fname : "usman",
    },
    {
        name : "rehan",
        fname : "usman",
    },
    {
        name : "rehan",
        fname : "usman",
    },
];
var tb = "<table border='1px'><tr><td>Name</td><td>Father Name</td></tr>"
arr.forEach((data)=>{
    tb = tb+"<tr><td>"+ data.name +"</td>"
    tb = tb+"<td>"+ data.fname +"</td></tr>"
})
tb =tb+"</table>";
alert(tb);
document.write(tb)
