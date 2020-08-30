import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NationalHeader from "./components/NationalHeader/NationalHeader.jsx";
import Header from "./components/Header/Header.jsx";
import StateData from "./components/StateData/StateData.jsx";
import RepSearch from "./components/RepSearch/RepSearch.jsx";
import News from "./components/News/News.jsx";
import DropDown from "./components/DropDown/DropDown.jsx";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className='main'>
          <div className='left'>
            <NationalHeader />
          </div>
          <div className='right'>
            <StateData />
            <RepSearch />
          </div>
        </div>
        <News />
        <Route path='/menu'>
          <DropDown />
        </Route>
      </div>
    );
  }
}
