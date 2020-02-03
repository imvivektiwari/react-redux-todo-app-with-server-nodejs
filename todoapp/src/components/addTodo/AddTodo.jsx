import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../../store/actions/addTodoAction';
import uuid from 'uuid';
import loading from '../../images/loading.svg';

class AddTodo extends Component {
    
    componentDidMount(){
       
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
    
        // fetch("http://localhost:8081", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    }
    
    addTodo() {
        if(this.refs.task.value==""){
            this.refs.task.classList.add('is-invalid');
            return;
        }
        this.refs.task.classList.remove('is-invalid');

        let datetime = new Date();
        this.props.addTodo(
            { 
                id:uuid.v4(),
                item: this.refs.task.value, 
                priority:this.refs.priority.value,
                isCompleted:false,
                status:'Active',
                datetime:datetime.toLocaleTimeString()+" "+datetime.toLocaleDateString()
            }
        );
        this.refs.task.value="";
    }
    taskInput = (e)=>{
        if(e.target.value!=""){
            this.refs.task.classList.remove('is-invalid');
        }
    };

    render() {
        return (
            <div className="row" id="todo-creator-container">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Enter Your Work Here" 
                    ref="task" onChange={(e)=>{this.taskInput(e)}}/>
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
                    { 
                        this.props.loading && 
                        <img src={loading} width="50px" height="36px" 
                        style={{display:'inline'}}
                        />
                    }
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