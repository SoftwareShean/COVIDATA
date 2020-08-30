import React, { Component } from 'react'
import './RepSearch.css'
import Search from '../../assets/ICON/Search/Search.jsx'

export default class RepSearch extends Component {
    render() {
        return (
            <div className="search component">
                <input 
                    className="repSearch"
                    placeholder="Find your representatives..."
                />
                <Search />
            </div>
        )
    }
}
