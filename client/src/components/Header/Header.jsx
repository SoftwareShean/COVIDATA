import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import './Header.css'
import Menu from '../../assets/ICON/Menu/Menu'
import Covid from '../../assets/ICON/Covid/Covid.jsx'
import DropDown from '../DropDown/DropDown'


export default class Header extends Component {
    state = {
        menu: false
    }
    render() {
        const {menu} = this.state
        return (
            <div>
                <header>
                    <Covid />
                    <h1>COVIDATA</h1>
                    <Link to="/menu"><Menu /></Link>
                </header>
            </div>
        )
    }
}
