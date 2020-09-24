import React, { Component } from "react";
import "./StateData.css";
import { stateData } from "./StateData.js";
import PopOver from "./PopOver/PopOver.jsx";

export default class StateData extends Component {
  state = {
    selections: "",
    selectValue: null,
    render: false,
  };

  async componentDidMount() {
    let selections = await stateData();
    this.setState({ selections: selections.data });
  }

  handleDropdownChange = async (e) => {
    let selection = e.target.value;
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
          <option selectValue='STATES'>STATES</option>
          {selections &&
            selections.map((state) => (
              <option key={state.state} value={state.state} name={state.state}>
                {state.state}
              </option>
            ))}
        </select>
        {render ? (
          <PopOver data={this.state.selectValue} render={this.handlePopOver} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
