import React, { Component } from "react";
import "./StateData.css";
import { stateData } from "./StateData.js";

export default class StateData extends Component {
  async componentDidMount() {
    let selections = await stateData();
    this.setState({ selections: selections});
    console.log(this.state.selections);
  }
  state = {
      selections: '',
  };
  render() {
    return (
      <div className='component stateData'>
        <h4>View Data by State</h4>
        <select></select>
      </div>
    );
  }
}
