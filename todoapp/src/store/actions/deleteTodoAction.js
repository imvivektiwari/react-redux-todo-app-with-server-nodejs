import {loading} from "./loadingAction"
import {actionNotify} from './../notify';
export function deleteTodoActionAsync(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}

export function deleteTodoAction(todo) {
    return (dispach)=> {
        dispach(loading(true));
        setTimeout(()=>{
            dispach(deleteTodoActionAsync(todo));
            dispach(loading(false));
            actionNotify('Task Deleted');
        }, 2000);
    }
}