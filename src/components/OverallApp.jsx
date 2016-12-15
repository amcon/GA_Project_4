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


// when I get user auth with JSON webtoken, I'll use react-router to display through
// user sign up and login
