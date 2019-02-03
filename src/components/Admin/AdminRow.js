import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class AdminRow extends Component {

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    deleteProject = () => {
        axios({
            method: 'DELETE',
            url: `/project/${this.props.project.id}`
        }).then((response) => {
            this.getProjects();
        }).catch((error) => {
            console.log(error);
            alert('Unable to delete item');
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.project.name}</td>
                <td>{<button onClick={this.deleteProject}>Delete</button>}</td>
            </tr>)
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);