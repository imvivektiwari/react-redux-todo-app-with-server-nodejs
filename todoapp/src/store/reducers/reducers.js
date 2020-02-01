import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    todoListReducer: todoListReducer
});

export default rootReducer;