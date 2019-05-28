import React from 'react';
import './App.css';
import Intro from '../Intro/Intro-index';
import Details from '../../containers/Details/Details-index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Poetry Search App
      </header>
      <Intro message="A place where you can find all the details about poetries"/>
      <Details />
    </div>
  );
}

export default App;
