import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../../store/actions/deleteTodoAction';
import { markCompleteById } from '../../store/actions/markCompleteById';
class Todo extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.task.item}</td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.status}</td>
                <td>{this.props.task.datetime}</td>
                <td>
                    <button disabled={this.props.task.isCompleted} 
                    className="btn btn-success"
                    onClick={() => this.props.markCompleteById(this.props.task.id) }>Complete</button>
                </td>
                <td>
                    <button className="btn btn-danger" 
                    onClick={() => this.props.deleteTodoById(this.props.task.id) }>Delete</button>
                </td>
            </tr>
        );
    }
}

const mapDispachToProps = (dispatch)  => {
    return {
        deleteTodoById: (a)=> dispatch(deleteTodoAction(a)),
        markCompleteById: (a)=> dispatch(markCompleteById(a))
    }
};

export default connect(null, mapDispachToProps)(Todo);
