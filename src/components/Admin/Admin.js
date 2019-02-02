import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    // appendToDOM = () => {


    //     return this.props.reduxStore.searchList.map((result) => {
    //         return <SearchResultsItem key={result.id} result={result} />
    //     })

    // }

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

            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(Admin);