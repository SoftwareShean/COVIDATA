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
                    <div className="totalCases"><h1>Total US Cases:</h1><h1><span>{total}</span></h1></div>
                    <div className="totalMortality"><h1>Total US Mortality:</h1><h1><span>{death}</span></h1></div>
            </div>
          </div>
        );
    }
}
