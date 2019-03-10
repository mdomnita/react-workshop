import React, { Component } from 'react';
import Button from './components/Button';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Button
                text={'Click me'}
                onClick={()=> {
                    console.log('clicked')
                }}
                isDisabled={true} //feel free to remove this or set to false after making sure it works
            />
        </div>
    );
  }
}

export default App;
