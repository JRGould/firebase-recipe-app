import React from 'react';
import logo from './corgi.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Recipe App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon!
        </p>
      </header>
    </div>
  );
}

export default App;
