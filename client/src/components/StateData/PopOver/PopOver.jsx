import React, { Component } from 'react'
import './PopOver.css'

export default class PopOver extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="statePopOver component">
                <button onClick={this.props.render}>X</button>
                {data}
            </div>
        )
    }
}
