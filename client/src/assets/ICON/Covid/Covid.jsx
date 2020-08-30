import React, { Component } from 'react'
import './Covid.css'
import Icon from '../../IMG/COVID.png'

export default class Covid extends Component {
    render() {
        return (
            <div className="icon">
                <img src={Icon} alt="" />
            </div>
        )
    }
}
