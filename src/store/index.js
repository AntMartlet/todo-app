import { observable, action, computed } from "mobx";
import { ALL_STATUSES, NEW } from "../constants/statuses";
import { SCRUM, LIST } from "../constants/views";
import { logIn, logOut, getTodos, getTodoId, initUser } from "../services";

class TodoStore {
    @observable
    todos = [];

    @observable
    sorting = '';

    @observable
    currentTodo = null;

    @observable
    currentUser = initUser();

    @observable
    logInErrorMessage = '';

    @observable
    todoView = SCRUM;

    @computed get statusTodos( ) {
        const statusTodos = {}
        ALL_STATUSES.forEach(function(key){
            statusTodos[key] = []
        });
        this.userTodos.forEach(function(todo){
            statusTodos[todo.status || NEW].push(todo)
        });
        return statusTodos
    };

    @computed get userTodos() {
        return this.todos.filter((todo)=>todo.idAsignee === this.currentUser.id);
    };

    @computed get sortedUserTodos() {
        return this.sorting ? [...this.userTodos].sort((a, b) => {
            return Number(a[this.sorting]) - Number(b[this.sorting]);
          }): [...this.userTodos];
    };

    @computed get todosLength( ) {
        return this.todos.length
    };

    logIn = (credentials) => {
        logIn(credentials || {}).then(this.logInSuccess).catch(this.logInError);
    }

    logOut = () => {
        logOut().then(this.logInSuccess);
    }

    getTodos = () => {
        getTodos().then(this.getTodosSuccess);
    }

    getTodoId = (id) => {
        getTodoId(id).then(this.getCurrentTodoSuccess);
    }

    @action
    logInSuccess = (user = null) => {
        this.currentUser = user;
        this.logInErrorMessage = '';
    }

    @action
    logInError = (logInErrorMessage) => {
        this.logInErrorMessage = logInErrorMessage;
    }

    @action
    getTodosSuccess = (todos = []) => {
        this.todos = todos;
    };

    @action
    getCurrentTodoSuccess = (todo = null) => {
        this.currentTodo = todo;
    };

    @action
    changeTodoView = () => {
        this.todoView = this.todoView === SCRUM ? LIST : SCRUM;
    };

    @action
    changeSorting = (sorting = '') => {
        this.sorting = sorting;
    };
}

export default new TodoStore()
