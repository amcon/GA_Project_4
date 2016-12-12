import React, { Component } from 'react';
import styles from './Profile.css';

class Profile extends Component {
    render() {
    return (
      <div className={styles["profile"]}>
        <img src={this.props.profile_pic} alt="" />
        <div className={styles["edit-user"]}>
          <div className={styles["user-info"]}>
            <p>Username: {this.props.user_name}</p>
            <p>Email: {this.props.email}</p>
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
            <button>Submit</button>
          </div>
      </div>
    );
  }
}

export default Profile;
