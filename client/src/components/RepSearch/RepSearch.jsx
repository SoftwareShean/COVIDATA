import React, { Component } from 'react'
import './RepSearch.css'
import Search from '../../assets/ICON/Search'

export default class RepSearch extends Component {
    render() {
        return (
            <div className="search component">
                <input 
                    className="repSearch"
                />
                <Search />
            </div>
        )
    }
}
