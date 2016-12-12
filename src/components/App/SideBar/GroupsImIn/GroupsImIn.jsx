import React, { Component } from 'react';
import styles from './GroupsImIn.css';

class GroupsImIn extends Component {
  render() {
    return (
      <div className={styles["groups-im-in"]}>
        <p>{this.props.group_name}</p>
      </div>
    );
  }
}

export default GroupsImIn;
