const intialState = [];


const todoListReducer = (state = intialState, action)=>{

    let newState = [...state];

    switch (action.type) {
        case 'ADD_TODO':
            newState = [action.payload, ...newState]
            break;
        case 'DELETE_TODO':
            newState.splice(action.payload, 1);
            break;
        default:
            return state;
    }
    return newState;
};

export default  todoListReducer;