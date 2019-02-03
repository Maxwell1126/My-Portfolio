import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import './Project.css';
class ProjectRow extends Component {
    render() {
        let appendName = null;
        if (this.props.project.name !== null) {
            appendName = <p>{'Name: ' + this.props.project.name}</p>
        }
        let appendDescription = null;
        if (this.props.project.description !== null) {
            appendDescription = <p>{'Description: ' + this.props.project.description}</p>
        }
        let appendThumbnail = null;
        if (this.props.project.thumbnail !== null) {
            appendThumbnail = <p>{'Thumbnail: ' + this.props.project.thumbnail}</p>
        }
        let appendWebsite = null;
        if (this.props.project.website !== null) {
            appendWebsite = <p>{'Website: '}{<a href={this.props.project.website}>Website</a>}</p>
        }
        let appendGithub = null;
        if (this.props.project.github !== null) {
            appendGithub = <p>{'GitHub: '}{<a href={this.props.project.github}>GitHub</a>}</p>
        }
        let appendDate = null;
        if (this.props.project.date_completed !== null) {
            appendDate = <p>{'Date: ' + this.props.project.date_completed.substr(0,10)}</p>
        }
        return (
            <Card className="card">
                <CardContent className="content">
                    {appendName}
                    {appendDate}
                    {appendThumbnail}
                    {appendWebsite}
                    {appendGithub}
                    <p>{'Tag: ' + this.props.project.tag_name}</p>
                </CardContent>
                <CardContent >
                    {appendDescription}
                </CardContent> 
            </Card>)
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(ProjectRow);