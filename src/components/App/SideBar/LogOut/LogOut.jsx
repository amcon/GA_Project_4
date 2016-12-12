import React, { Component } from 'react';
import styles from './LogOut.css';

class LogOut extends Component {
  render() {
    return (
      <div className={styles["log-out"]}>
        <button>Log Out</button>
      </div>
    );
  }
}

export default LogOut;
