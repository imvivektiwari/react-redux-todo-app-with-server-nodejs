import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../../store/actions/deleteTodoAction';
import { bindActionCreators } from 'redux';

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

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(Todo);
