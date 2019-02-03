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
                <Card className="cardheader"><Typography><h1>Max's Portfolio</h1></Typography></Card>
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