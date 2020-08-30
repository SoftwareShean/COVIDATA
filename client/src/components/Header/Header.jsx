import React, { Component } from 'react'
import './Header.css'
import Menu from '../../assets/ICON/Menu/Menu'
import Covid from '../../assets/ICON/Covid/Covid.jsx'


export default class Header extends Component {
    // state = {
    //     menu: false
    // }
    render() {
        // const {menu} = this.state
        return (
            <div>
                <header>
                    <Covid />
                    <h1>COVIDATA</h1>
                    <Menu />
                </header>
            </div>
        )
    }
}
