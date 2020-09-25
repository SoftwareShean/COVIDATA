import React, { Component } from "react";
import "./RepSearch.css";
import Search from "../../assets/ICON/Search/Search.jsx";
import { getRepresentatives } from "./RepSearch.js";

export default class RepSearch extends Component {
  state = {
  senators: ''
}

  searchResults = async (e) => {
    let search = e.target.value;
    if (search.length >= 2) {
      let senatorArray = []
      let senators = await getRepresentatives(search);
      senatorArray.push(senators)
      this.setState({
        senators: [senatorArray]
      })
      console.log(senators)
    }
  };
  render() {
    return (
      <div className='search component'>
        <input
          onChange={(e) => {
            this.searchResults(e);
          }}
          className='repSearch'
          placeholder='What State do you live in?'
          value={Event.target}
        />
        <Search />
      </div>
    );
  }
}
