import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectRow from './ProjectRow';

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
                {this.props.reduxStore.projects.map((project) => {
                    return (<ProjectRow key={project.id} project={project} />)
                })}
            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Project);