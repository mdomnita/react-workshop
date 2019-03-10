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
                classname={'large-btn'}
            />
        </div>
    );
  }
}

export default App;
