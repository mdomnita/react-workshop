import React, { Component } from 'react';
import './styles/App.css';
import Button from './components/common/Button';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Button
              text={'Click me'}
              onClick={()=> {
                  console.log('clicked')
              }}
              classname={'large-btn'}
          />
      </div>
    );
  }
}

export default App;
