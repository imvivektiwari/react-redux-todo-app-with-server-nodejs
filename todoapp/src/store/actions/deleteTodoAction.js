import {loading} from './loadingAction';

export function deleteTodoActionAsync(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}

export function deleteTodoAction(todo) {
    
    // return (dispach)=>{
    //     dispach(loading(true));
    //     setTimeout(()=>{
    //         console.log(todo);
    //         dispach(loading(false));
    //         dispach(deleteTodoActionAsync(todo));
    //     },2000);
    // };
    
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}