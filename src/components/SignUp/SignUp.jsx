import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import styles from './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles["sign-up"]}>
        <div className={styles["sign-container"]}>
          <h1>GroupIt</h1>
          <div className={styles["input-area"]}>
            <p>username:</p>
            <input />
          </div>
          <div className={styles["input-area"]}>
            <p>email:</p>
            <input />
          </div>
          <div className={styles["input-area"]}>
            <p>password:</p>
            <input />
          </div>
          <div className={styles["input-area"]}>
            <p>profile picture:</p>
            <DropZone
            className={styles['drop-zone']}
            multiple={false}
            accept="image/*"><p>+</p>
          </DropZone>
          </div>
          <button>Log in</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
