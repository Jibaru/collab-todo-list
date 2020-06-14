import {saveData, getData} from './data_controller.js';

const getAllTodos = () =>  getData('todos');

const setAllTodos = (todos) => saveData('todos', todos);

export const getTodos = (workgroup) =>  getAllTodos().filter( todo => todo.workgroup == workgroup );

export const getTodo = (id) => getAllTodos().find( todo => todo.id == id );

export const deleteTodo = (id) => {
    const todosUpdated = getAllTodos().filter( todo => todo.id != id );
    setAllTodos(todosUpdated);
}

export const updateTodo = (todo) => {
    const todos = getAllTodos();
    const todoIndex = getAllTodos().map(t => t.id).indexOf(todo.id);

    todos[todoIndex] = todo;

    setAllTodos(todos);
    return todos[todoIndex];
}

export const partialUpdateTodo = (todo) => {
    const todos = getAllTodos();
    const todoIndex = getAllTodos().map(t => t.id).indexOf(todo.id);

    Object.keys(todo).forEach(key => {
        if(!!todo[key]){
            todos[todoIndex][key] = todo[key];
        }
    })

    setAllTodos(todos);
    
    return todos[todoIndex];
}

export const createTodo = (todo) => {

    if(!todo.id){
        const todos = getAllTodos();
        todo.id = todos.length;
        todos.push(todo);
        setAllTodos(todos);
        return todo;
    }

}