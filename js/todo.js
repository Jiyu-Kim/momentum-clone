const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObj) {
    // create <ii></li> tag
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    // create <span></span> tag
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    //create <button></button> tag
    const button = document.createElement("button");
    button.innerText = "❌";
    // delete <li></li> tag
    button.addEventListener("click", deleteToDo);
    // append <li></li>,<span></span>,<button.</button> into HTML
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
    // stop refreshing
    event.preventDefault();
    // save toDoInput value
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    // empty toDoInput value
    toDoInput.value = "";
    // paint ToDoInput
    paintToDo(newToDoObj);
    // save ToDo into localStorage
    saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
