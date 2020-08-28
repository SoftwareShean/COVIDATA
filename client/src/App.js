import React from 'react';
import './App.css';
import NationalHeader from './components/NationalHeader/NationalHeader.jsx';
import Header from './components/Header/Header.jsx';
import StateData from './components/StateData/StateData.jsx';
import RepSearch from './components/RepSearch/RepSearch.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <NationalHeader />
      <StateData />
      <RepSearch />
    </div>
  ); 
}

export default App;
