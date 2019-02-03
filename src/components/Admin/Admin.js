import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminRow from './AdminRow.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import 'typeface-roboto';
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
                tag: null,
            }
        }
    }

    componentDidMount() {
        this.getProjects();
        this.getTags();
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

    updateTag = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                tag: event.target.value,
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
                <Link to="/">back to projects</Link>
                < br/>
                <input onChange={this.updateName} placeholder="Name"></input>
                <select onChange={this.updateTag}>
               
                    <option value="" disabled selected>Select a Tag</option>
                    {this.props.reduxStore.tags.map((tag) => {
                        return (
                            <option value={tag.tag_id}>{tag.tag_name}</option>
                        )
                    })}
                </select>
                <input onChange={this.updateDate} type="date" placeholder="date"></input>
                <input onChange={this.updateGithub} placeholder="GitHub URL"></input>
                <input onChange={this.updateWebsite} placeholder="Webstire URL"></input>
                <textarea onChange={this.updateDescription} defaultValue="Description" rows="5" cols="100"></textarea>
                <button onClick={this.addProject}>Submit</button>
                <Table>
                    <TableHead>
                        <tr>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.projects.map((project) => {
                            return (
                                <AdminRow key={project.id} project={project} />
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Admin);