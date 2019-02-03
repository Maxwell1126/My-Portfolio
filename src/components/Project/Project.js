import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
class Project extends Component {

    componentDidMount(){
        this.getProjects()
    }

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    render() { 
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Thumbnail</th>
                            <th>Website</th>
                            <th>GitHub</th>
                            <th>Date Completed</th>
                            <th>Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.projects.map((project) => {
                            return(
                            <tr>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{project.thumbnail}</td>
                                <td><a href={project.website}>Website</a></td>
                                <td><a href={project.github}>GitHub</a></td>
                                <td>{project.date_completed}</td>
                                <td>{project.tag_name}</td>
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

export default connect(mapStoreToProps)(Project);