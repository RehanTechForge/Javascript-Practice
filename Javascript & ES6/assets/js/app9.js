
var arrofobj = [
    {
        p_name : 'Ferrari',
        p_oprice : '43000',
        p_price : '5000000',
        p_img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1592198084033-aade902d1aae%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVycmFyaXxlbnwwfHwwfHx8MA%253D%253D&tbnid=sDp-FJVlKRRzXM&vet=12ahUKEwiWoIOinJOCAxV7sScCHVqnCaUQMygBegQIARBy..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fferrari&docid=qQY1MFvC1fITBM&w=1000&h=667&q=ferrari%20images&ved=2ahUKEwiWoIOinJOCAxV7sScCHVqnCaUQMygBegQIARBy',
        p_desc : 'this is our ferrari'
    },
    {
        p_name : 'lamborgini',
        p_oprice : '700000',
        p_price : '9000000',
        p_img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.lamborghini.com%2Fsites%2Fit-en%2Ffiles%2FDAM%2Flamborghini%2Ffacelift_2019%2Fmodels_gw%2F2023%2F03_29_revuelto%2Fgate_models_og_01.jpg&tbnid=KeZBFXY_efdmOM&vet=12ahUKEwjxuqS9rZOCAxWNU6QEHXEXAlIQMygBegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.lamborghini.com%2Fen-en%2Fmodels&docid=EID4z4HJNRxdmM&w=1920&h=1080&q=lamborghini&ved=2ahUKEwjxuqS9rZOCAxWNU6QEHXEXAlIQMygBegQIARBw',
        p_desc : 'this is our lamborginni'
    },
    {
        p_name : 'Supra',
        p_oprice : '40000',
        p_price : '7000000',
        p_img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1603811478698-0b1d6256f79a%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwc3VwcmF8ZW58MHx8MHx8fDA%253D&tbnid=DcnuL7a_CVJdCM&vet=12ahUKEwjR_efUrZOCAxUVWqQEHTY9Ct4QMygBegQIARBw..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftoyota-supra&docid=CF0v-i7tIOgooM&w=1000&h=667&q=supra&ved=2ahUKEwjR_efUrZOCAxUVWqQEHTY9Ct4QMygBegQIARBw',
        p_desc : 'this is our supra'
    },
    {
        p_name : 'mastang',
        p_oprice : '45000',
        p_price : '5000000',
        p_img : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgd.aeplcdn.com%2F1280x720%2Fcw%2Fec%2F23766%2FFord-Mustang-Exterior-126883.jpg%3Fwm%3D0%26q%3D80&tbnid=zCIzZCbtXXyF1M&vet=12ahUKEwil0anqrZOCAxV1nCcCHfxLBj0QMygAegQIARBu..i&imgrefurl=https%3A%2F%2Fwww.carwale.com%2Fford-cars%2Fmustang%2Fgt-fastback-50l-v8%2F&docid=qi8c6MmLZL0a8M&w=752&h=423&q=mastang&ved=2ahUKEwil0anqrZOCAxV1nCcCHfxLBj0QMygAegQIARBu',
        p_desc : 'this is our mastang'
    }
];

    var imgobj = document.getElementById('img');
    var headobj = document.querySelector('h3');
    var opobj = document.querySelector('s');
    var npobj = document.querySelector('.span');
    var paraobj = document.querySelector('p');

    //console.log(imgobj,headobj,opobj,npobj,paraobj)

    //console.log(arrofobj[0])
    //document.getElementById('img').src = arrofobj[0].p_img;
    

arrofobj.forEach(function(value){
   // document.querySelector('img').src = arrofobj[0].p_img;
    //console.log(arrofobj[0])
    document.getElementById('img').src = value.p_img
    //console.log(value.p_img)
    //console.log(value.p_img)
    `<img src="${p_img}">`
    headobj.innerHTML = value.p_name
    opobj.innerHTML = value.p_oprice
    npobj.innerHTML = value.p_price
    paraobj.innerHTML = value.p_desc
})
