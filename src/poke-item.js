import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <img alt="pokemon" src={this.props.pokeImage}></img>
                <p>Pokemon: {this.props.name}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
            </div>
        )
    }
}
