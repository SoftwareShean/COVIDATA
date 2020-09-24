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
        console.log(nationalData)
        let totalDeaths = nationalData[0].death
        let totalCases = nationalData[0].positive
        let totalDeathsFormatted = totalDeaths.toLocaleString()
        let totalPositiveFormatted = totalCases.toLocaleString()
        console.log(totalDeathsFormatted)
        this.setState({
            total: totalPositiveFormatted,
            death: totalDeathsFormatted
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
