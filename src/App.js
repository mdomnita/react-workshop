import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    const buttonText = 'Click me';
    return (
      <div className='App'>
          <button>{buttonText}</button>
      </div>
    );
  }
}

export default App;
