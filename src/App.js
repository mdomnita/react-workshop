import React, { Component } from 'react';
import Button from './components/common/Button';
import UsersList from './components/UsersList';
import './styles/App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <UsersList />
        </div>
    );
  }
}

export default App;
