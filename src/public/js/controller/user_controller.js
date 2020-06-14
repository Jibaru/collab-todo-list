import {saveData, getData} from './data_controller.js';

const getAllUsers = () =>  getData('users');

const setAllUsers = (users) => saveData('users', users);

export const getUsers = (workgroup) =>  getAllUsers().filter( user => user.workgroup == workgroup );

export const getUser = (name) => getAllUsers().find( user => user.name == name );

export const createUser = (user) => {

    if(!getUser(user.name)){
        const users = getAllUsers();
        users.push(user);
        setAllUsers(users);
    }

}