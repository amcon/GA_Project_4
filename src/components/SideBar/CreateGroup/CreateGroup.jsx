import React, { Component } from 'react';
import styles from './CreateGroup.css';

class CreateGroup extends Component {
  render() {
    return (
      <div className={styles["create-group"]}>
        <p>Group Name:</p>
        <input type="text" />
        <p>Users:</p>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }
}

export default CreateGroup;
