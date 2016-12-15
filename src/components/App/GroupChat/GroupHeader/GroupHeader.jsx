import React, { Component } from 'react';
import styles from './GroupHeader.css';

class GroupHeader extends Component {
  render() {
    return (
      <div className={styles["users"]}>
        <p>{this.props.user_name}</p>
      </div>
    );
  }
}

export default GroupHeader;
