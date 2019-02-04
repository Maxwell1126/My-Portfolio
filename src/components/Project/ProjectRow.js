import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import './Project.css';
class ProjectRow extends Component {
    render() {
        let appendName = null;
        if (this.props.project.name !== null) {
            appendName = <p><strong><u>Name:  </u></strong>{this.props.project.name}</p>
        }
        let appendDescription = null;
        if (this.props.project.description !== null) {
            appendDescription = <p><strong><u>Description:  </u></strong>{this.props.project.description}</p>
        }
        let appendThumbnail = null;
        if (this.props.project.thumbnail !== null) {
            appendThumbnail = <p><strong><u>Thumbnail:  </u></strong><br/><img src={this.props.project.thumbnail}/></p>
        }
        let appendWebsite = null;
        if (this.props.project.website !== null) {
            appendWebsite = <p><strong><u>Website:  </u></strong>{<a href={this.props.project.website}>Website</a>}</p>
        }
        let appendGithub = null;
        if (this.props.project.github !== null) {
            appendGithub = <p><strong><u>GitHub:  </u></strong>{<a href={this.props.project.github}>GitHub</a>}</p>
        }
        let appendDate = null;
        if (this.props.project.date_completed !== null) {
            appendDate = <p><strong><u>Date: </u></strong>{this.props.project.date_completed.substr(0,10)}</p>
        }
        return (
            <Card className="card">
                <Typography>
                <CardContent className="content">

                 {appendThumbnail}
                    {appendName}
                    {appendDate}
                    {appendWebsite}
                    {appendGithub}
                    <p><strong><u>Tag:  </u></strong> {this.props.project.tag_name}</p>
                </CardContent>
                <CardContent className="description">

                    {appendDescription}
                    
                </CardContent> 
                </Typography>
            </Card>)
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(ProjectRow);