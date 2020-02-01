const intialState = [
   
];


const todoListReducer = (state = intialState, action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return [action.payload, ...state];
        case 'DELETE_TODO':
            let copy = Object.assign(state);
            console.log(action);
            copy.splice(action.payload, 1);
            return [...copy];
        default:
            return state;
    }
};

export default  todoListReducer;