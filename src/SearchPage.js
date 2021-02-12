import React, { Component } from 'react'
import pokeData from "./data.js";
import PokeList from './poke-list.js';

export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <h1>Search Page!</h1>
                <PokeList pokeData={pokeData} />
            </div>
        )
    }
}
