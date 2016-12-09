import React, { Component } from 'react';
import styles from './MyGroups.css';

class MyGroups extends Component {
  render() {
    return (
      <div className={styles["my-groups"]}>
        <h3>My Groups</h3>
        <p>GROUP I ADMIN GOES HERE <button>X</button></p>
        <p>GROUP I BELONG TO GOES HERE</p>
        <p>+ Create Group</p>
      </div>
    );
  }
}

export default MyGroups;
