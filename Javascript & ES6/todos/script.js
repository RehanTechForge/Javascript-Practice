let userInp = document.getElementById("addTask");
let button = document.querySelector(".button");
let mainContainer = document.querySelector(".main");
let form = document.querySelector('form');
let myArr = [];

let myUl = document.createElement("ul");
mainContainer.appendChild(myUl);

form.addEventListener('submit',(event) => {
    event.preventDefault();
});

button.addEventListener("click", () => {
  if (userInp.value.trim() != "") {
    // Create a list item
    let myLi = document.createElement("li");

    // Create a paragraph element
    let myPara = document.createElement("p");

    // Create a new time input element
    let timeInput = document.createElement("input");

    // Set the type attribute to 'time'
    timeInput.setAttribute("type", "time");

    // Create buttons
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";

    let compBtn = document.createElement("button");
    compBtn.innerHTML = "Complete";

    // Set paragraph content to user input
    myPara.innerHTML = userInp.value.trim();

    // Get the current time
    let now = new Date();

    // Format the current time as HH:mm (24-hour format)
    let formattedTime = now.toLocaleTimeString();
    timeInput.value = formattedTime;
    timeInput.disabled = true;

    // Append paragraph and buttons to the list item
    myLi.appendChild(myPara);
    myLi.appendChild(editBtn);
    myLi.appendChild(delBtn);
    myLi.appendChild(compBtn);
    myLi.appendChild(timeInput);
    myArr.unshift(myLi);

    // Clear user input
    userInp.value = "";

    // Insert the new task at the top of the list
    myUl.insertBefore(myLi, myUl.firstChild);

    // Call elemDelete function for the delete button and list item
    elemEdit(editBtn, myLi);
    elemDelete(delBtn, myLi);
    taskCompleted(compBtn, myLi);
  }
});
const elemDelete = (elem, myLi) => {
  elem.addEventListener("click", () => {
    myLi.remove();
  });
};
const taskCompleted = (elem, myLi) => {
  elem.addEventListener("click", () => {
    myLi.firstChild.style.textDecoration = "line-through";
  });
};
const elemEdit = (elem, myLi) => {
  elem.addEventListener("click", () => {
    userInp.value = myLi.firstChild.textContent;
    myLi.remove();
  });
};
userInp.addEventListener('input',(event) => {
    //console.log(event.target.value);
    myArr.map((item,index) => {
        if(item.firstChild.textContent === userInp.value){
            let span = document.querySelector('#span');
            // console.log(span);
            span.style.color='red';
            span.innerHTML = 'you Already Assign this Task';
            button.disabled = true;
            document.addEventListener('keydown',(event) => {
                if (event.key === "Backspace") {
                    span.innerHTML = '';
                    button.disabled = false;
                }
            })
        }
    });
});
