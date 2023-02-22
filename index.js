const form = document.getElementById("add-todo");
const todoHolder = document.getElementById("todo-list");

function addTodo(event) {
    event.preventDefault();
    const todoInput = form.querySelector("input");
    const todoItem = todoInput.value.trim();

    if(todoItem.length === 0) return;

    todoItemLi = document.createElement("li");
    todoItemButton = document.createElement("button")
    todoItemButton.innerText = todoItem

    todoItemLi.appendChild(todoItemButton)
    todoHolder.appendChild(todoItemLi);

    todoItemButton.addEventListener("click", markTodoComplete)

    todoInput.value = ""
}

function markTodoComplete(event) {
    event.target.style.textDecoration = "line-through";
    event.target.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    event.target.parentElement.remove();
}

form.addEventListener("submit", addTodo)