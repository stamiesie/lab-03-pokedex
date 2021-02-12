import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select value={this.props.currentValue}
                    onChange={this.props.handleChange}
                >
                    {this.props.options.map(listItem =>
                        <option key={listItem} value={listItem}> {listItem} </option>)
                    }
                </select>
            </div>
        )
    }
}
