import Todo from './model/todo.js';
import User from './model/user.js';
import * as UserController from './controller/user_controller.js';
import * as TodoController from './controller/todo_controller.js';
import * as UserComponent from './components/user_list.js';
import * as TodoComponent from './components/todo_list.js';
import * as Form from './utils/form_todo.js';
import { openModal, closeModal } from './utils/modal.js';

const params = new URLSearchParams(window.location.search);

if(!params.has('user') && !params.has('workgroup')){
    window.location = 'index.html';
    throw new Error('User and workgroup is empty');
}

// Create new instance for entered user
const user = new User(params.get('user'), params.get('workgroup'));

// Insert user on localStorage if not exists 
UserController.createUser(user);

// Get All Workgroup Users and Todos
const users = UserController.getUsers(user.workgroup);
const todos = TodoController.getTodos(user.workgroup);

// Set the user and workgroup on home
document.getElementById('user-logged').textContent = user.name;
document.querySelector('.workgroup').textContent = user.workgroup;

// Draw all users, todos
UserComponent.drawUsers(users);
UserComponent.drawSelectUsers(users);
TodoComponent.drawTodos(todos);

// Listeners
document.getElementById('add-todo').addEventListener('click', (e) => {
    
    Form.clearTodoForm();
    Form.isUpdate(false);

    openModal('todo-modal');
});

document.getElementById('todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if(e.submitter.id === 'btn-save-todo'){
        const todo = TodoController.createTodo(Form.getTodoFromForm(user));

        TodoComponent.appendTodo(todo);

    } else if(e.submitter.id === 'btn-update-todo'){

        const todo = TodoController.updateTodo(Form.getTodoFromForm(user));

        TodoComponent.updateTodo(todo);
        
    }

    Form.clearTodoForm();

    closeModal('todo-modal');
});

document.getElementById('todos-list').addEventListener('click', (e) => {
    e.preventDefault();
    let className = e.target.className;

    if (className.includes('edit-todo')){

        let idTodo = e.target.getAttribute('data-id');

        let todo = TodoController.getTodo(idTodo);

        Form.clearTodoForm();
        Form.loadTodoForm(todo);
        Form.isUpdate(true);

        openModal('todo-modal');


    } else if (className.includes('delete-todo')){

        let idTodo = e.target.getAttribute('data-id');

        TodoController.deleteTodo(idTodo);

        TodoComponent.removeTodo(idTodo);

    } else if (className.includes('complete-todo')){

        let idTodo = e.target.getAttribute('data-id');
        let todo = Todo.empty();

        todo.id = Number(idTodo);
        todo.completed = true;

        todo = TodoController.partialUpdateTodo(todo);

        TodoComponent.updateTodo(todo);
    }

    
    
});

