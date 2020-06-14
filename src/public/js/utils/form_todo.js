import Todo from "../model/todo.js";

const idInput = document.getElementById('input-todo-id');
const nameInput = document.getElementById('input-todo-name');
const descriptionInput = document.getElementById('input-todo-description');
const assignedToSelect = document.getElementById('select-todo-to');
const btnSaveTodo = document.getElementById('btn-save-todo');
const btnUpdateTodo = document.getElementById('btn-update-todo');

export const getTodoFromForm = (user) => {
    let id = Number(idInput.value);
    let name = nameInput.value;
    let description = descriptionInput.value;
    let assignedTo = assignedToSelect.options[assignedToSelect.selectedIndex].value;

    return new Todo(id, name, description, assignedTo, user.workgroup);
}

export const loadTodoForm = (todo) => {
    idInput.value = todo.id;
    nameInput.value = todo.name;    
    descriptionInput.value = todo.description;
    assignedToSelect.value = todo.assignedTo;

}

export const clearTodoForm = () => {
    idInput.value = '';
    nameInput.value = '';
    descriptionInput.value = '';
}

export const isUpdate = (value) => {
    if(value){
        displayBtnSave(false);
        displayBtnUpdate(true);
        btnUpdateTodo.type = "submit";
        btnSaveTodo.type = "button";
    } else {
        displayBtnSave(true);
        displayBtnUpdate(false);
        btnUpdateTodo.type = "button";
        btnSaveTodo.type = "submit";
    }
}

const displayBtnUpdate = (value) => {
    value ? btnUpdateTodo.style.display = 'block' 
          : btnUpdateTodo.style.display = 'none'; 
}

const displayBtnSave = (value) => {
    value ? btnSaveTodo.style.display = 'block' 
          : btnSaveTodo.style.display = 'none'; 
}
