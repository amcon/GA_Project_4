import React, { Component } from 'react';
import SignUp from './SignUp/SignUp.jsx';
import LogIn from './LogIn/LogIn.jsx';
import App from './App/App.jsx';

class OverallApp extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <LogIn />
        <App />
      </div>
    );
  }
}

export default OverallApp;
