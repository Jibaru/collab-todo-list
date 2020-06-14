const userList = document.getElementById('users-list');
const selectList = document.getElementById('select-todo-to');

const userLi = (user) => {
    let comp = `
        <li class="list-group-item">
        ${user.name}
        </li>`;
    
    return comp;
}

export const drawSelectUsers = (users) => {

    selectList.innerHTML = '';
    for(let user of users){
        let option = document.createElement('option');
        option.text = user.name;
        option.value = user.name;
        selectList.add(option);
    }

}

export const drawUsers = (users) => {

    userList.innerHTML = '';
    for(let user of users){
        userList.innerHTML += userLi(user);
    }

}

