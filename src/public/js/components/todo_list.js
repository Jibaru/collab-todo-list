const todoList = document.getElementById('todos-list');

const btnEdit = (todo) => {
    return `
    <button class="edit-todo btn btn-success btn-sm btn-block" data-id="${todo.id}">
        Editar
    </button>
    `;
}

const btnDelete = (todo) => {
    return `
    <button class="delete-todo btn btn-danger btn-sm btn-block" data-id="${todo.id}">
        Eliminar
    </button>
    `;
}

const btnComplete = (todo) => {
    return `
    <button class="complete-todo btn btn-danger btn-sm btn-block" data-id="${todo.id}">
        Completado
    </button>
    `;
}

const todoContent = (todo) => {
    return `
    <div class="row">
        <div class="col-md-8">
            <div>
                <span id="todo-name-${todo.id}" class="font-weigth-bold">${todo.name}</span>
            </div>
            <div>
                <span>Descripción: </span>
                <span id="todo-description-${todo.id}">${todo.description}</span>
            </div>
            <div>
                <span>Estado: </span>
                <span id="todo-status-${todo.id}">${todo.completed ? 'Completado' : 'Sin completar'}</span>
            </div>
            <div>
                <span>Asignado a:</span>
                <span id="todo-assigned-to-${todo.id}">${todo.assignedTo}</span>
            </div>
        </div>
        <div class="col-md-4">
            ${todo.completed ? '': btnEdit(todo)}
            ${todo.completed ? '': btnDelete(todo)}
            ${todo.completed ? '': btnComplete(todo)}
        </div>
    </div>
    `;
}

const todoLi = (todo) => {

    return `
    <div id="todo-${todo.id}" class="border shadow-sm p-3 mb-3 bg-white rounded">
        ${todoContent(todo)}
    </div>
    `;
}

export const drawTodos = (todos) => {
    todoList.innerHTML = '';
    for(let todo of todos){
        todoList.innerHTML += todoLi(todo);
    }

}

export const appendTodo = (todo) => {
    todoList.innerHTML += todoLi(todo);
}

export const updateTodo = (todo) => {

    document.getElementById(`todo-${todo.id}`).innerHTML = todoContent(todo);
    
}

export const removeTodo = (id) => {
    let todo = document.getElementById(`todo-${id}`);
    todo.parentNode.removeChild(todo);
}