import React, { Component } from 'react'
import request from 'superagent';
import Loading from './loading-spinner.js';

export default class DetailPage extends Component {
    state = {
        pokemonData: {},
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {
        return (
            <div className="detail-container">
                {
                    this.state.loading ? <Loading /> :
                        <div className="poke-detail">
                            <img className="detail-image" alt="pokemon" src={this.state.pokemonData.url_image} />
                            <p>Name: {this.state.pokemonData.pokemon}</p>
                            <p>Type 1: {this.state.pokemonData.type_1}</p>
                            <p>Type 2: {this.state.pokemonData.type_2}</p>
                            <p>Attack: {this.state.pokemonData.attack}</p>
                            <p>Defense: {this.state.pokemonData.defense}</p>
                            <p>Speed: {this.state.pokemonData.speed}</p>
                            <p>Ability: {this.state.pokemonData.ability_1}</p>
                        </div>
                }
            </div>
        )
    }
}
