const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// function addList() {
//     toDoList.classList.add('')
// }
// function askToDoList() {
//     toDoForm.addEventListener("submit", toDoHandlerSubmit);
// }

// function saveListValue(text) {
//     localStorage.setItem(TODOS_LS, text);
// }

// function toDoHandlerSubmit(event) {
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     saveListValue(currentValue);
//     addToDo();
// }

// function addToDo() {
//     const toDos = localStorage.getItem(TODOS_LS);
//     toDoList.innerText = `${toDos}`;
// }

// function loadToDos() {
//     if 
// }

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li)
    console.log(text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const toDos = localStorage.getItem("TODOS_LS");
    if(toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();

//4:48