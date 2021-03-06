import React, { Component } from 'react'
import request from 'superagent';
// import pokeData from "./data.js";
import PokeList from './poke-list.js';
import Dropdown from './dropdown.js';
import SearchBar from './Search-bar.js';


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        sortOrder: 'ascending',
        search: '',
        loading: false,
        pokeCount: 0,
        perPage: 25,
        currentPage: 1
    }
    // on load, show all pokemon
    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    // get data from API for the state categories to sort and filter
    fetchPokemon = async () => {
        // loading state set to true to turn on
        this.setState({ loading: true })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);

        this.setState({
            // loading state set back to false to turn off
            loading: false,
            pokemon: data.body.results,
            pokeCount: data.body.count,
        });
    }

    // await before state to avoid double clicks on button and drop downs

    handleSortBy = async (e) => {
        await this.setState({
            sortBy:
                e.target.value
        });
        // call function to get API data
        await this.fetchPokemon();
    }

    handleSortOrder = async (e) => {
        await this.setState({
            sortOrder:
                e.target.value
        });
        // call function to get API data
        await this.fetchPokemon();
    }

    handleSearchChange = async (e) => {
        // needed for form
        e.preventDefault();
        await this.setState({
            search:
                // target with input name 'search'
                e.target.search.value
        });
        // call function to get API data
        await this.fetchPokemon();
    }

    handlePrevClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.fetchPokemon();
    }

    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.fetchPokemon();
    }

    handleClick = async () => {
        await this.setState({
            currentPage: 1
        });
        await this.fetchPokemon();
    }


    render() {

        const lastPage = Math.ceil(this.state.pokeCount / this.state.perPage);
        // // sort
        // if (this.state.sortOrder === 'ascending') {
        //     this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        // }

        // if (this.state.sortOrder === 'descending') {
        //     this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        // }

        // // filter for search input
        // const filteredPoke = this.state.pokemon.filter(pokeObj => pokeObj.pokemon.includes(this.state.search));
        // console.log(filteredPoke);


        return (
            <div className="search-page">
                <div className="side-bar">
                    <button onClick={this.handlePrevClick} disabled={this.state.currentPage === 1}>Prev</button>
                    <p>Page {this.state.currentPage}</p>
                    <button onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}>Next</button>
                    <div className="search-bar">
                        <p className="search-title">Search Pokemon by name:</p>
                        <SearchBar
                            onClick={this.handleClick}
                            handleChange={this.handleSearchChange}
                            sortBy={this.state.sortBy}
                        />
                    </div>
                    <div className="dropdown">
                        <p>Search by:</p>
                        <Dropdown
                            // pokemon sorter
                            currentValue={this.state.sortBy}
                            handleChange={this.handleSortBy}
                            options={['pokemon', 'shape', 'ability_1', 'type_1']}
                        />
                    </div>
                    <div className="dropdown">
                        <p>Sort Order:</p>
                        <Dropdown
                            // sorting direction
                            currentValue={this.state.sortOrder}
                            handleChange={this.handleSortOrder}
                            options={['ascending', 'descending']}
                        />
                    </div>
                </div>
                <div>
                    <PokeList pokeData={this.state.pokemon} loading={this.state.loading} />
                </div>
            </div>
        )
    }
}
