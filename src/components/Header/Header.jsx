import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles["header"]}>
        <div className={styles["logo"]}>
        <h1>GroupIt</h1>
        <img src="" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
