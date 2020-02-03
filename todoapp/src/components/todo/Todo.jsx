import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../../store/actions/deleteTodoAction';

class Todo extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.task.item}</td>
                <td>{this.props.task.priority}</td>
                <td>{this.props.task.status}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.deleteTodoById(this.props.index) }>Delete</button>
                </td>
            </tr>
        );
    }
}

const mapDispachToProps = (dispatch)  => {
    return {
        deleteTodoById: (a)=> dispatch(deleteTodoAction(a))
    }
};

export default connect(null, mapDispachToProps)(Todo);
