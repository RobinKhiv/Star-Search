import React, { Component } from 'react';
import SearchDisplay from './Components/SearchDisplay/SearchDisplay';
import './App.css';
import Header from './Components/header/Header';
import { StarProvider } from './Context/StarSearchContext';


class App extends Component {
  render() {
    return (
     <StarProvider>
        <Header/>
        <main role='main'>
          <SearchDisplay />
        </main>
     </StarProvider>
    );
  }
}

export default App;
