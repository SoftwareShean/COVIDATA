import React, { Component } from "react";
import "./RepSearch.css";
import Search from "../../assets/ICON/Search/Search.jsx";
// import { getRepresentatives } from "./RepSearch.js";

export default class RepSearch extends Component {
  render() {
    return (
      <div className='search component'>
        <input
        //   onChange={getRepresentatives()}
          className='repSearch'
          placeholder='Find your representatives...'
        />
        <Search />
      </div>
    );
  }
}
