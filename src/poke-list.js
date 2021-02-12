import React, { Component } from 'react'
import PokeItem from 'poke-item.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokeData.map((pokeObj) =>
                    <PokeItem
                        key={pokeObj._id}
                        name={pokeObj.pokemon}
                        attack={pokeObj.attack}
                        defense={pokeObj.defense}
                        pokeImage={pokeObj.url_image}
                    />
                )}
            </div>
        )
    }
}
