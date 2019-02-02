import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class AdminRow extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            date: '',
            github: '',
            website: '',
            tag: ''
        }
    }
    updateName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    updateDate = (event) => {
        this.setState({
            date: event.target.value,
        })
    }
    updateWebsite = (event) => {
        this.setState({
            website: event.target.value,
        })
    }
    updateGithub = (event) => {
        this.setState({
            github: event.target.value,
        })
    }
    updateDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
    }
    // getProjects = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/project'
    //     }).then((response) => {
    //         const action = { type: 'SET_PROJECTS', payload: response.data };
    //         this.props.dispatch(action);
    //     })
    // }
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