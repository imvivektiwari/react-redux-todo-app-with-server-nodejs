export function deleteTodoActionAsync(todo) {
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}

export function deleteTodoAction(todo) {
    return (dispach)=> {
        setTimeout(()=>{
            dispach(deleteTodoActionAsync(todo));
        }, 2000);
    }
}