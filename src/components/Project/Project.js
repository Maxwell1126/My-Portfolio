import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectRow from './ProjectRow';
import Card from '@material-ui/core/Card';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import './Project.css'
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
            <div className="background">
                <div className="wrapper">
                <Typography><h1>Max's Portfolio</h1></Typography>

                <div className="image">
                <img className="img" src='/images/me.jpg' />
                </div>
                </div>
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