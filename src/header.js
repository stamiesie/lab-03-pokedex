import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="nav-bar">
                    <NavLink className="nav-button" exact activeClassName="selected" to="/">Home Page</NavLink>
                    <NavLink className="nav-button" exact activeClassName="selected" to="/search">Search Page</NavLink>
                </div>
                <h1 className="header-title">Pokedex Sorter</h1>
            </header>

        )
    }
}
