import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="home-message">
                    {/* <h1>Welcome!</h1>
                    <h2>Use the search link above to get started!</h2> */}
                    <img className="home-background" alt="pokemon" src="pokedex_3.jpg" />
                </div>
            </div>
        )
    }
}
