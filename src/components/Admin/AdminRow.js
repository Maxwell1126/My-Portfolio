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
    getProjects = () => {
        axios({
            method: 'GET',
            url: '/project'
        }).then((response) => {
            const action = { type: 'SET_PROJECTS', payload: response.data };
            this.props.dispatch(action);
        })
    }



    deleteProject = () => {
        console.log('this', project.id);
        axios({
            method: 'DELETE',
            url: `/project/${project.id}`
        }).then((response) => {
            this.getProjects();
        }).catch((error) => {
            console.log(error);
            alert('Unable to delete item');
        });
    }
    render() {
        return (
            <div>
                <input onChange={this.updateName} placeholder="Name"></input>
                <select>
                    <option disabled selected>Select a Tag</option>
                    <option value="React">React</option>
                    <option value="JQuery">JQuery</option>
                    <option value="Node">Node</option>
                    <option value="SQL">SQL</option>
                    <option value="Redux">Redux</option>
                    <option value="HTML">HTML</option>
                </select>
                <input onChange={this.updateDate} type="date" placeholder="date"></input>
                <input onChange={this.updateGithub} placeholder="GitHub URL"></input>
                <input onChange={this.updatewebsite} placeholder="Webstire URL"></input>
                <textarea onChange={this.updateDescription} rows="5" cols="100">Description</textarea>
                <button >Submit</button>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.projects.map((project) => {
                            return (
                                <tr>
                                    <td>{project.name}</td>
                                    <td>{<button onClick={this.deleteProject}>Delete</button>}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);