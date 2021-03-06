import React, { Component } from 'react';
import { deleteTodos, toggleTodos } from '../../HomePage/home_page_actions'
import { connect } from 'react-redux'
import './style.css';
import icoCompleted from './ico-complited.svg'
import icoNotCompleted from './ico-notComplited.svg'
import icoDelete from './ico-delete.svg'


class Task extends Component {

    state = {
        text: this.props.children,
        completed: this.props.task.completed
    }

    handleDelete = ev => {
        ev.preventDefault()

        const task_id = this.props.task._id
        this.props.deleteTodos(task_id)
    }

    handleChange = ev => {
        this.setState({
            text: ev.target.value
        })
    }

    handleKeyPress = ev => {
        if (ev.key === 'Enter') {
            this.saveTask(ev)
        }
    }

    handleToggleStatus = ev => {
        ev.preventDefault()

        const { _id } = this.props
        const task_id = this.props.task._id
        console.log(_id, task_id);
        this.props.toggleTodos(_id, task_id)
        this.setState({
            completed: !this.state.completed
        })

    }

    getTaskStatus() {

        if (this.state.completed) {
            return <img src={icoCompleted}
                onClick={this.handleToggleStatus}
                className="task-status__ico"
                alt="status done"
            />
        } else {
            return <img
                src={icoNotCompleted}
                onClick={this.handleToggleStatus}
                className="task-status__ico"
                alt="status not done"
            />
        }
    }
    render() {
        return (
            <div className="task">
                <div className="task_wrapper">
                    {this.getTaskStatus()}

                    <img src={icoDelete}
                        onClick={this.handleDelete}
                        className="task-delete__ico"
                        alt="delete"
                    />
                    <div className="task__text">{this.state.text}</div>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {

    return {
        _id: state.authentication.user._id
    }


}

export default connect(mapStateToProps, { deleteTodos, toggleTodos })(Task);