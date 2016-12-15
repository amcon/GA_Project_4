import React, { Component } from 'react';
import styles from './LogIn.css';

class LogIn extends Component {
  render() {
    return (
      <div className={styles["log-in"]}>
        <div className={styles["log-container"]}>
          <h1>GroupIt</h1>
          <div className={styles["input-area"]}>
            <p>username:</p>
            <input />
          </div>
          <div className={styles["input-area"]}>
            <p>password</p>
            <input />
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;


// placeholder for my logIn component when I get user auth up
