import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminRow from './AdminRow.js'
class Admin extends Component {
    constructor() {
        super()
        this.state = {
            newProject: {
                name: null,
                description: null,
                date_completed: null,
                github: null,
                website: null,
                tag: 2,
            }
        }
    }
    componentDidMount() {
        this.getProjects();
    }

    updateName = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                name: event.target.value,
            }
        })

    }

    updateDate = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                date_completed: event.target.value,
            }
        })
    }

    updateWebsite = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                website: event.target.value,
            }
        })
    }

    updateGithub = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                github: event.target.value,
            }
        })
    }

    updateDescription = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                description: event.target.value,
            }
        })
    }

    getTags = () => {
        const action = { type: 'FETCH_TAGS'};
        this.props.dispatch(action);
    }

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    addProject = (event) => {
        const action = { type: 'ADD_PROJECT', payload: this.state.newProject }
        this.props.dispatch(action)
    }

    render() {
        return (
            <div>
                <input onChange={this.updateName} placeholder="Name"></input>
                <select>
                    {/* <option value=""disabled selected>Select a Tag</option> */}
                    <option value="React">React</option>
                    <option value="JQuery">JQuery</option>
                    <option value="Node">Node</option>
                    <option value="SQL">SQL</option>
                    <option value="Redux">Redux</option>
                    <option value="HTML">HTML</option>
                </select>
                <input onChange={this.updateDate} type="date" placeholder="date"></input>
                <input onChange={this.updateGithub} placeholder="GitHub URL"></input>
                <input onChange={this.updateWebsite} placeholder="Webstire URL"></input>
                <textarea onChange={this.updateDescription} defaultValue="Description" rows="5" cols="100"></textarea>
                <button onClick={this.addProject}>Submit</button>

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
                                <AdminRow key={project.id} project={project} />
                            )
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

export default connect(mapStoreToProps)(Admin);