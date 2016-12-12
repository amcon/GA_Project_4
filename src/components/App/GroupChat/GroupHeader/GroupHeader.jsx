import React, { Component } from 'react';
import styles from './GroupHeader.css';

class GroupHeader extends Component {
  render() {
    return (
      <div className={styles["group-header"]}>
        <h2>Group Name: {this.props.group_name}</h2>
        <p>Users: USERS IN GROUP GO HERE</p>
      </div>
    );
  }
}

export default GroupHeader;
