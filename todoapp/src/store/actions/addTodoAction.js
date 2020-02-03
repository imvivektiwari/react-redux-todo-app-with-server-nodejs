import {loading} from "./loadingAction"

export function addTodoActionAsync(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export function addTodoAction(todo) {
    return (dispach)=> {
        dispach(loading(true));
        setTimeout(()=>{
            dispach(addTodoActionAsync(todo));
            dispach(loading(false));
        }, 2000);
    }
}