import {loading} from "./loadingAction"

export function markCompleteByIdAsync(todo) {
    return {
        type: 'MARK_COMPLETE_TODO',
        payload: todo
    };
}

export function markCompleteById(todo) {
    
    return (dispach)=> {
        dispach(loading(true));
        setTimeout(()=>{
            dispach(markCompleteByIdAsync(todo));
            dispach(loading(false));
        }, 2000);
    }
}