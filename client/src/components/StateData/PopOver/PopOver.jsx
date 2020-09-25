import React, { Component } from "react";
import "./PopOver.css";
import { stateArray } from "../StateData.js";
import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa";

export default class PopOver extends Component {
  state = {
    state: Number,
    data: {},
    minus: false,
    plus: false,
  };

  componentDidMount() {
    let dataInfo = this.setStateIndex();
    this.setState({
      data: dataInfo,
    });
      console.log(this.state.data)
  }

  componentDidUpdate = async (prevProps) => {
    // let previousStateData = this.setPreviousStateIndex();
    // this.setState({
    //   data: previousStateData,
    //   minus: false,
    // });
    //   let nextStateData = this.setSubsequentStateIndex();
    //   this.setState({
    //       data: nextStateData, 
    //       plus: false
    //   })
  };

  setStateIndex = () => {
    let stateIndex = this.props.data;
    this.setState({
      state: stateIndex,
    });
    let data = stateArray(stateIndex);
    return data;
  };

//   setPreviousStateIndex = () => {
//     this.setState({
//       minus: true,
//     });
//     let previousState = this.state.state - 1;
//     console.log(previousState);
//     let previousStateData = stateArray(previousState);
//     console.log(previousStateData);
//     return previousStateData;
//   };

//   setSubsequentStateIndex = () => {
//     let nextState = this.state.state + 1;
//     console.log(nextState);
//     let nextStateData = stateArray(nextState);
//     console.log(nextStateData);
//     return nextStateData;
//   };

//   renderPreviousStateData = () => {
//     if (this.state.minus) {
//       let previousState = this.state.state - 1;
//       console.log(previousState);
//       let previousStateData = stateArray(previousState);
//       console.log(previousStateData);
//       return previousStateData;
//     } 
//   };

  render() {
    const { data } = this.state;
    const { currentData, render } = this.props;
    return (
      <>
        {this.state.data && (
          <div className='statePopOver component'>
            <div className='popOverCloseButton'>
              <button onClick={render}>
                <FaTimes />
              </button>
            </div>
            <div className='statePopOverHeader'>
              <button onClick={this.setPreviousStateIndex}>
                <FaAngleLeft />
              </button>
              <h1>{data.state}</h1>
              <button>
                <FaAngleRight onClick={this.setSubsequentStateIndex} />
              </button>
            </div>
            <div className='currentStateData'>
              <div className='stateOutline'>
                <img src={data.outline} alt='state outline' />
              </div>
              <div className='stateInfo'>
                <h1>
                  Governor: <br />
                  {data.governor}
                </h1>
                <h1>
                  Positive Cases: <br />
                  {currentData.positive === 0 || null ? (
                    <span>0</span>
                  ) : (
                    <span>{currentData.positive.toLocaleString()}</span>
                  )}
                </h1>
                <h1>
                  Total Deaths: <br />
                  {currentData.death === 0 || null ? (
                    <span>0</span>
                  ) : (
                    <span>{currentData.death.toLocaleString()}</span>
                  )}
                </h1>
                <h1>
                  Hospitalized Currently: <br />
                  {currentData.hospitalizedCurrently === 0 || null ? (
                    <span>0</span>
                  ) : (
                    <span>
                      {currentData.hospitalizedCurrently.toLocaleString()}
                    </span>
                  )}
                </h1>
                <h4>
                  Last Updated:
                  <span>{this.props.currentData.lastUpdateEt}</span>
                </h4>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
