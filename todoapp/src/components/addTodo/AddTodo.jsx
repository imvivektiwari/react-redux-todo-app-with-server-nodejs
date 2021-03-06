import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../../store/actions/addTodoAction';

class AddTodo extends Component {
    
    addTodo() {
        this.props.addTodo({ item: this.refs.task.value, priority:this.refs.priority.value ,status:'Active' });
        this.refs.task.value="";
    }

    render() {
        return (
            <div className="row" id="todo-creator-container">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Your Work Here" ref="task" />
                </div>
                <div className="col">
                    <select className="form-control" ref="priority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Heigh">Heigh</option>
                    </select>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={event => this.addTodo()}>Create</button>
                </div>
                <div className="col">
                    { this.props.loading && <span>Loading . . .</span>}
                </div>
            </div>
        );
    }
}

const mapDistachToProps = (dispatch)=>{
    return {
        addTodo: (a)=>dispatch(addTodoAction(a))
    };
};

const mapStoreToProps = (state)=>{
    return {
        loading:state.todoListReducer.loading
    };
};

export default connect(mapStoreToProps, mapDistachToProps)(AddTodo);