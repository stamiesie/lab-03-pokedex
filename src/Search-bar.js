import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleChange}>
                    <input name="search" placeholder="Search"></input>
                    <button value="Submit">Search</button>
                </form>
            </div>
        )
    }
}
