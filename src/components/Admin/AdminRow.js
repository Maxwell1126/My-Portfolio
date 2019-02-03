import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import 'typeface-roboto';
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
            console.log('in delete', this.props.project.id);
            
            this.getProjects();
        }).catch((error) => {
            console.log(error);
            alert('Unable to delete item');
        });
    }

    render() {
        console.log('project', this.props.project.id);
        
        return (
            <TableRow>
                <TableCell>{this.props.project.name}</TableCell>
                <TableCell>{<button onClick={this.deleteProject}>Delete</button>}</TableCell>
        </TableRow>)
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(AdminRow);