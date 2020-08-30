import React, { Component } from 'react'
import './StateData.css'


export default class StateData extends Component {
    render() {
        return (
          <div className='component stateData'>
            <h4>View Data by State</h4>
            <select name='State Data' id=''>
              <option>Alabama</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
            </select>
          </div>
        );
    }
}
