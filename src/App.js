import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
    </>
  );
}

export default App;


