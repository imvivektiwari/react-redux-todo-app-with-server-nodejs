import {loading} from "./loadingAction"
import {actionNotify} from './../notify';
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
            actionNotify('Task Created');
        }, 2000);
    }
}