export function addTodoActionAsync(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
}

export function addTodoAction(todo) {
    return (dispach)=> {
        setTimeout(()=>{
            dispach(addTodoActionAsync(todo));
        }, 2000);
    }
}