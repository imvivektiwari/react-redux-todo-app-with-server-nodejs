import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../todo/Todo';

class TodoList extends Component {
    render() {
        return (
            <div id="todo-list-container">
                <table className="table table-striped table-bordered">
                    <thead className="thead">
                        <tr>
                            <td>S.No</td>
                            <td>Task</td>
                            <td>Priority</td>
                            <td>Status</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !console.log("aada",this.props.items) &&
                            this.props.items.map((element, index) => {
                                return <Todo key={index} index={index} task={element} />;
                            })
                        }
                    </tbody>
                </table>
            </div>    
        );
    }
}

const mapStoreToProps = (state) =>{
    
    return {
        items: state.todoListReducer.todoArray
    };
};

export default connect(mapStoreToProps)(TodoList);
