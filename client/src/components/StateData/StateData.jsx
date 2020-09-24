import React, { Component } from "react";
import "./StateData.css";
import { stateData } from "./StateData.js";
import PopOver from "./PopOver/PopOver.jsx";

export default class StateData extends Component {
  state = {
    selections: "",
    selectValue: '',
    render: false,
  };

  async componentDidMount() {
    let selections = await stateData();
    this.setState({ selections: selections });
  }

  handleDropdownChange = async (e) => {
    this.setState({ selectValue: e.target.value, render: true });
  };

  handlePopOver = () => {
    this.setState((prevState) => ({
      render: !prevState.render
    }))
  }

  render() {
    const { selections, render } = this.state;
    return (
      <div className='component stateData'>
        <label>
          <h4>Select A State:</h4>
        </label>
        <select
          value={this.state.selectValue}
          onChange={this.handleDropdownChange}
        >
          <option selectvalue='STATES'>STATES</option>
          {selections &&
            selections.map((state, index) => (
              <option key={state.state} value={index} name={state.state}>
                {state.state}
              </option>
            ))}
        </select>
        {render ? (
          <PopOver data={this.state.selectValue} render={this.handlePopOver} currentData={this.state.selections[this.state.selectValue]} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
