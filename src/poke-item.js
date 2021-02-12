import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-image-container">
                <img className="poke-image" alt="pokemon" src={this.props.pokeImage}></img>
                <p>Pokemon: {this.props.name}</p>
                <p>Shape: {this.props.shape}</p>
                <p>Ability: {this.props.ability_1}</p>
                <p>Type: {this.props.type_1}</p>
                <p>Speed: {this.props.speed}</p>
            </div>
        )
    }
}
