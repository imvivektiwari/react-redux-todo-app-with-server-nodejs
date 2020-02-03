const intialState = {
    todoArray:[],
    loading:false
};


const todoListReducer = (state = intialState, action)=>{

    let newState = {...state};

    switch (action.type) {
        case 'ADD_TODO':
            newState.todoArray = [action.payload, ...newState.todoArray]
            break;
        case 'DELETE_TODO':
            newState.todoArray.splice(action.payload, 1);
            newState.todoArray = [...newState.todoArray];
            break;
        case 'LOADING': 
            newState.loading=action.payload;
            break;
        default:
            return state;
    }
    return newState;
};

export default  todoListReducer;