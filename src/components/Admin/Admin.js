import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <input placeholder="Name"></input>
                <select>
                    <option disabled selected>Select a Tag</option>
                    <option value="React">React</option>
                    <option value="JQuery">JQuery</option>
                    <option value="Node">Node</option>
                    <option value="SQL">SQL</option>
                    <option value="Redux">Redux</option>
                    <option value="HTML">HTML</option>
                </select>
                <input type="date" placeholder="date"></input>
                <input placeholder="GitHub URL"></input>
                <input placeholder="Webstire URL"></input>
                <textarea rows="5" cols="100"></textarea>
                <button>Submit</button>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.projects.map((project) => {
                            return (
                                <tr>
                                    <td>{project.name}</td>
                                    <td>{<button>Delete</button>}</td>
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

export default connect(mapStoreToProps)(Admin);