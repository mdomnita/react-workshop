import React, { Component } from 'react';
import './styles/App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Button
              text={'Click me'}
              onClick={()=> {
                  console.log('clicked')
              }}
              isDisabled={true} //feel free to remove this after making sure it works
          />
      </div>
    );
  }
}

export default App;
