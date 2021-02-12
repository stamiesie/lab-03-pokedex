import React, { Component } from 'react'
import pokeData from "./data.js";
import PokeList from './poke-list.js';
import Dropdown from './dropdown.js';
import SearchBar from './Search-bar.js';

export default class SearchPage extends Component {
    state = {
        pokemon: pokeData,
        sortBy: 'pokemon',
        sortOrder: 'ascending',
        search: '',
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

    handleSearchChange = (e) => {
        // needed for form
        e.preventDefault();
        this.setState({
            search:
                // target with input name 'search'
                e.target.search.value
        });
    }


    render() {
        // sort
        if (this.state.sortOrder === 'ascending') {
            this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        }

        if (this.state.sortOrder === 'descending') {
            this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        }

        // filter for search input
        const filteredPoke = this.state.pokemon.filter(pokeObj => pokeObj.pokemon.includes(this.state.search));
        console.log(filteredPoke);


        return (
            <div>
                <h1>Search Page!</h1>
                <SearchBar
                    handleChange={this.handleSearchChange}
                    sortBy={this.state.sortBy}
                />

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
                <PokeList pokeData={filteredPoke} />
            </div>
        )
    }
}
