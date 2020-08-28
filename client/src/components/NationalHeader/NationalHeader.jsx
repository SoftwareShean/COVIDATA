import React, { Component } from 'react'
import './NationalHeader.css'
import {getNationalData} from './NationalHeader.js'


export default class NationalHeader extends Component {
    async componentDidMount() {
        let nationalData = await getNationalData();
        this.setState({
            total: nationalData[0].total,
            death: nationalData[0].death
        })
        console.log(nationalData)
    }
    state = {
        total: '',
        death: ''
    }
    render() {
        const {total, death} = this.state
        return (
          <div>
            <div className='nationalHeader component'>
                    <h1>Total US Cases {total}</h1>
                    <h1>Total US Mortality {death}</h1>
            </div>
          </div>
        );
    }
}
