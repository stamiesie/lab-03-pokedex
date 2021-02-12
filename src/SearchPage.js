import React, { Component } from 'react'
import pokeData from "./data.js";
import PokeList from './poke-list.js';
import Dropdown from './dropdown.js';

export default class SearchPage extends Component {
    state = {
        pokemon: pokeData,
        sortBy: 'pokemon',
        sortOrder: 'ascending',
    }

    handleSortBy = (e) => {
        this.setState({
            sortBy:
                e.target.value
        });
    }

    handleSortOrder = (e) => {
        this.setState({
            sortOrder:
                e.target.value
        });
    }

    // handleSearchChange = (e) => {
    //     this.setState({
    //         search:
    //             e.target.value
    //     });
    // }


    render() {
        // sort
        if (this.state.sortOrder === 'ascending') {
            this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            console.log(pokeData);
        }

        if (this.state.sortOrder === 'descending') {
            this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        }

        // filter for search bar here

        return (
            <div>
                <h1>Search Page!</h1>
                {/* <input onChange={this.handleSearchChange}/> */}
                <div className="dropdown">
                    <Dropdown
                        // pokemon sorter
                        currentValue={this.state.sortBy}
                        handleChange={this.handleSortBy}
                        options={['pokemon', 'shape', 'ability_1', 'type_1']}
                    />
                </div>
                <div className="dropdown">
                    <Dropdown
                        // sorting direction
                        currentValue={this.state.sortOrder}
                        handleChange={this.handleSortOrder}
                        options={['ascending', 'descending']}
                    />
                </div>
                <PokeList pokeData={pokeData} />
            </div>
        )
    }
}
