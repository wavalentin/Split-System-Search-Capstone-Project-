import React from 'react';
import Search from './components/Search';
import './App.css';
import Header from '.components/Header';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Header title = "Search Split Systems" />
      <Search />
      <ItemList />
    </div>
  );
}

export default App;
