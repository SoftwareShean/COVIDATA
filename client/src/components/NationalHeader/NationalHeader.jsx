import React, { Component } from 'react'
import './NationalHeader.css'
import {getNationalData} from './NationalHeader.js'


export default class NationalHeader extends Component {
    state = {
        total: '',
        death: ''
    }
    async componentDidMount() {
        let nationalData = await getNationalData();
        let totalDeaths = nationalData[0].death.toLocaleString();
        let totalCases = nationalData[0].positive.toLocaleString()
        this.setState({
            total: totalCases,
            death: totalDeaths
        })
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
