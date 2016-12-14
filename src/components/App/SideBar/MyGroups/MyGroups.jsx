import React, { Component } from 'react';
import styles from './MyGroups.css';

class MyGroups extends Component {
  render() {
    return (
      <div className={styles["my-groups"]}>
        <p>{this.props.group_name}</p>
      </div>
    );
  }
}

export default MyGroups;
