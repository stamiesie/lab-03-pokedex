import React, { Component } from 'react'
import PokeItem from './poke-item.js';
import Loading from './loading-spinner.js';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                {this.props.loading ? <Loading /> : this.props.pokeData.map(pokeObj =>
                    <PokeItem
                        key={pokeObj._id}
                        pokeImage={pokeObj.url_image}
                        name={pokeObj.pokemon}
                        shape={pokeObj.shape}
                        ability_1={pokeObj.ability_1}
                        type_1={pokeObj.type_1}
                    />
                )}
            </div>
        )
    }
}
