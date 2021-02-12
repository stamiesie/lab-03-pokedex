import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName="selected" to="/">Home Page</NavLink>
                <NavLink exact activeClassName="selected" to="/search">Search Page</NavLink>

                <h1>Pokedex Sorter</h1>
            </header>

        )
    }
}
