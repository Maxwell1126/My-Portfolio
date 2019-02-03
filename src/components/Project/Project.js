import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectRow from './ProjectRow';
// import axios from 'axios';
class Project extends Component {

    componentDidMount() {
        this.getProjects()
    }

    getProjects = () => {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxStore.projects)} */}
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
                            return (<ProjectRow key={project.id} project={project} />)
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