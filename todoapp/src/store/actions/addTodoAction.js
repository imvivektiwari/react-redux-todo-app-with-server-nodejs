import {loading} from './loadingAction';

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
            dispach(loading(false));
            dispach(addTodoActionAsync(todo));
        }, 2000);
    }
}