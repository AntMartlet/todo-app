import {todos, users} from './mocks';

export const getTodos= () => new Promise(function(resolve) {
    resolve(todos);
});

export const getTodoId= (id) => new Promise(function(resolve) {
    const todo = todos.find(x => x.id === id);
    resolve(todo || null);
});

export const logIn= ({login, password}) => new Promise(function(resolve, reject) {
    const user = users.find(u => u.login === login);
    if (user && user.password === password) {
        localStorage.setItem("userId", String(user.id))
        resolve(user)
    } else {
        reject('No such user')
    }
});

export const logOut = () => new Promise(function(resolve) {
    localStorage.removeItem("userId");
    resolve();
});

export const initUser = () => {
    const userId = localStorage.getItem("userId");
    return users.find(u => u.id === Number(userId)) || null;
};
