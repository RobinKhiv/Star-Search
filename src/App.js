import React, { Component } from 'react';
import StarSearchForm from './Components/StarSearchForm';
import SearchDisplay from './Components/SearchDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
         <StarSearchForm />
        </header>
        <main role='main'>
          <SearchDisplay />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
