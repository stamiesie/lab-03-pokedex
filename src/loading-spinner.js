import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="loading-container">
                <img alt="pokemon" src="loading.gif" />
            </div>
        )
    }
}
