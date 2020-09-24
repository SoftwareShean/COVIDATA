import React, { Component } from "react";
import "./PopOver.css";
import { stateArray } from "../StateData.js";
import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";

export default class PopOver extends Component {
  state = {
    state: Number,
    data: {},
  };
  componentDidMount() {
    let dataInfo = this.setStateIndex();
    this.setState({
      data: dataInfo,
    });
  }

  setStateIndex = () => {
    let stateIndex = this.props.data;
    let data = stateArray(stateIndex);
    return data;
  };

  setImageURLString = () => {
    let imageURL = this.state.data.outline;
    return toString(imageURL);
  };
  render() {
    const { image } = this.state;
    return (
      <>
        {this.state.data && (
          <div className='statePopOver component'>
            <div className='popOverCloseButton'>
              <button onClick={this.props.render}>
                <FaTimes />
              </button>
            </div>
            <div className='statePopOverHeader'>
              <button>
                <FaAngleLeft />
              </button>
              <h1>{this.state.data.state}</h1>
              <button>
                <FaAngleRight />
              </button>
            </div>
            <div
              className='stateOutline'
            >
              <img src={this.state.data.outline} />
            </div>
            <div className='stateInfo'>
              <h1>{this.state.data.governor}</h1>
            </div>
          </div>
        )}
      </>
    );
  }
}
