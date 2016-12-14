import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles["header"]}>
        <div className={styles["logo"]}>
        <img src="http://icons.iconarchive.com/icons/iconexpo/speech-balloon-grey/256/speech-balloon-white-g-icon.png" alt="logo" />
        <h1>roupIt</h1>
        </div>
      </div>
    );
  }
}

export default Header;
