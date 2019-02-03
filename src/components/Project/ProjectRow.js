import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProjectRow extends Component {
    render() {
        let appendName = null;
        if (this.props.project.name !== null) {
            appendName = this.props.project.name
        }
        let appendDescription = null;
        if (this.props.project.description !== null) {
            appendDescription = this.props.project.description
        }
        let appendThumbnail = null;
        if (this.props.project.thumbnail !== null) {
            appendThumbnail = this.props.project.thumbnail
        }
        let appendWebsite = null;
        if (this.props.project.website !== null) {
            appendWebsite = <a href={this.props.project.website}>Website</a>
        }
        let appendGithub = null;
        if (this.props.project.github !== null) {
            appendGithub = <a href={this.props.project.github}>GitHub</a>
        }
        let appendDate = null;
        if (this.props.project.date_completed !== null) {
            appendDate = this.props.project.date_completed
        }
        let appendTag = null;
        if (this.props.project.tag_name !== null) {
            appendTag = this.props.project.tag_name
        }
        return (
            <tr>
                <td>{appendName}</td>
                <td>{appendDescription}</td>
                <td>{appendThumbnail}</td>
                <td>{appendWebsite}</td>
                <td>{appendGithub}</td>
                <td>{appendDate}</td>
                <td>{appendTag}</td>
            </tr>)
    }
}
const mapStoreToProps = reduxStore => ({
    reduxStore,
})
export default connect(mapStoreToProps)(ProjectRow);