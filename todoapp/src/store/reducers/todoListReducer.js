const intialState = {
    todoArray:[
        {
            "id":"d9c50bbb-e71b-4b19-8b15-a658ea13dde0",
            "item":"clean room",
            "priority":"Low",
            "isCompleted":false,
            "status":"Active",
            "datetime":"6:50:12 PM 2/3/2020"
        }
    ]
    ,
    loading:false
};


const todoListReducer = (state = intialState, action)=>{

    let newState = {...state};

    switch (action.type) {
        case 'ADD_TODO':
            newState.todoArray = [action.payload, ...newState.todoArray]
            break;
        case 'DELETE_TODO':
            newState.todoArray = deleteTaskById(newState.todoArray, action.payload);
            break;
        case 'MARK_COMPLETE_TODO':
            newState.todoArray = changeTaskStatusById(newState.todoArray, action.payload, "Completed");
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


const deleteTaskById = (array, id)=>{
    return array.filter((ele)=>{
        return ele.id!=id
    });
}

const changeTaskStatusById = (array, id, status)=>{

    array = Object.assign([], array);
    array.forEach((element,index) => {
        if(element.id==id){
            let obj = {...array[index]};
            obj.status=status;
            obj.isCompleted=true;
            array[index]=obj;
            return false;
        }
    });
    return array;
}