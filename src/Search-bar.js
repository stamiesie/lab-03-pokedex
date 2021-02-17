import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleChange}>
                    <div><input name="search" placeholder="Search"></input></div>
                    <div><button value="Submit">Search</button></div>
                </form>
            </div>
        )
    }
}
