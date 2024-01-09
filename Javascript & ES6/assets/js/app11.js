
var stinfo = [
    {
        name : 'Muhammad Rehan',
        age  : 18,
        pno  : '03184966323',
        class: 'First Year',
        img  : 'img1.jpeg',
    },
    {
        name : 'Muhammad Usman',
        age  : 18,
        pno  : '03122251369',
        class: 'B com',
        img  : 'img2.jpeg',
    },
    {
        name : 'Muhammad Rehan',
        age  : 18,
        pno  : '03134359833',
        class: 'Second Year',
        img  : 'img3.jpeg',
    },
]
var res = `<table border="1" align="center">
<tr>
<td>Name</td>
<td>Age</td>
<td>Phone No</td>
<td>Class</td>
<td>Images</td>
</tr>
`
stinfo.forEach((data)=>{
    res = res+`
        <tr>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.pno}</td>
        <td>${data.class}</td>
        <td><img src="assets/images/${data.img}" height="50px" width="50px"></td>
        </tr>
    `
})
res = res+`</table>`
document.write(res);
