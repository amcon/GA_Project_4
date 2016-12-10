import React, { Component } from 'react';
import styles from './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className={styles["profile"]}>
        <img src="http://market.ionic.io/img/user-default.png" alt="" />
        <div className={styles["edit-user"]}>
          <div className={styles["user-info"]}>
            <p>Username: USERNAME GOES HERE</p>
            <p>Email: USER EMAIL GOES HERE</p>
          </div>
          <button>Edit</button>
        </div>
          <div className={styles["edit-prof"]}>
            <div className={styles["input"]}>
              <p>New Username:</p>
              <input />
            </div>
            <div className={styles["input"]}>
              <p>New Email:</p>
              <input />
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
