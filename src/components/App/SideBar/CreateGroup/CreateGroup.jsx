import React, { Component } from 'react';
import styles from './CreateGroup.css';

class CreateGroup extends Component {
  render() {
    return (
      <div className={styles["create-group"]}>
        <div className={styles["input"]}>
        <p>Group Name:</p>
          <input type="text" />
          </div>
        <div className={styles["input"]}>
          <p>Username:</p>
          <input type="text" />
        </div>
        <div className={styles["input"]}>
          <p>Username:</p>
          <input type="text" />
        </div>
        <div className={styles["input"]}>
          <p>Username:</p>
          <input type="text" />
        </div>
        <div className={styles["input"]}>
          <p>Username:</p>
          <input type="text" />
        </div>
        <div className={styles["input"]}>
          <p>Username:</p>
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default CreateGroup;
