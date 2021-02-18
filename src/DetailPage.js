import React, { Component } from 'react'
import request from 'superagent';
import Loading from './loading-spinner.js';

export default class DetailPage extends Component {
    state = {
        pokemonData: {}
    }

    componentDidMount = async () => {
        this.setState({ loading: true })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }





    render() {
        return (
            <div>
                <p>Detail Page!</p>
                {this.state.loading ? <Loading /> :
                    <div>
                        <img alt="pokemon" src={this.state.pokemonData.url_image} />
                        <p>{this.state.pokemonData.pokemon}</p>
                        <p>{this.state.pokemonData.type_1}</p>
                        <p>{this.state.pokemonData.type_2}</p>
                        <p>{this.state.pokemonData.attack}</p>
                        <p>{this.state.pokemonData.defense}</p>
                        <p>{this.state.pokemonData.speed}</p>
                        <p>{this.state.pokemonData.ability_1}</p>
                    </div>
                }
            </div>
        )
    }
}
