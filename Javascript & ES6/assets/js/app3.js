var getul = document.getElementById('getul');
function foo(){
    var inp = document.getElementById('inp');
    var li = document.createElement('li');
    var litext = document.createTextNode(inp.value);
    li.appendChild(litext);
    getul.appendChild(li);
    inp.value = '';
    var deletebtn = document.createElement('button');
    var deletebtntext = document.createTextNode('Delete');
    deletebtn.appendChild(deletebtntext);
    li.appendChild(deletebtn);
    deletebtn.setAttribute('onclick','del(this)');
    var editbtn = document.createElement('button');
    var editbtntext = document.createTextNode('Edit');
    editbtn.appendChild(editbtntext);
    li.appendChild(editbtn);
    editbtn.setAttribute('onclick','editfun(this)');
}

function deleteall(){
    getul.innerHTML = '';
}

function del(e){
    e.parentNode.remove();
}

function editfun(e){
    // var a = prompt('Enter Edit Value: ',e.parentNode.firstChild.nodeValue);
    // e.parentNode.firstChild.nodeValue = a;
    // document.getElementById('inp').value += e.parentNode.firstChild.nodeValue;
    var inp = document.getElementById('inp');
    var a = e.parentNode.firstChild.nodeValue;
    e.parentNode.remove();
    inp.value = a;


}