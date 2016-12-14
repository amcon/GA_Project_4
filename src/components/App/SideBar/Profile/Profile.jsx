import React, { Component } from 'react';
import styles from './Profile.css';

class Profile extends Component {

  renderUpdateUser() {
    if (this.props.showUserForm == true) {
      return (
          <div className={styles["edit-prof"]}>
            <div className={styles["input"]}>
              <p>New Username:</p>
              <input
                onChange={this.props.updateProfileUserName}
              />
            </div>
            <div className={styles["input"]}>
              <p>New Email:</p>
              <input
                onChange={this.props.updateProfileEmail}
              />
            </div>
            <div className={styles["input"]}>
              <p>New Password:</p>
              <input
                type="password"
                onChange={this.props.updateProfilePassword}
              />
              </div>
              <div className={styles["input"]}>
              <p>New Profile Picture:</p>
              <input
                onChange={this.props.updateProfilePic}
              />
            </div>
            <button onClick={this.props.handleProfileEditSubmit}>Submit</button>
          </div>
        );
    }
  }

    render() {
    return (
      <div className={styles["profile"]}>
        <img src={this.props.profile_pic} alt="" />
        <div className={styles["edit-user"]}>
          <div className={styles["user-info"]}>
            <p>Username: {this.props.user_name}</p>
            <p>Email: {this.props.email}</p>
          </div>
          <button onClick={() => this.props.changeUserFormState()}>Edit</button>
        </div>
      <div className={styles["update"]}>
        {this.renderUpdateUser()}
      </div>
      </div>
    );
  }
}

export default Profile;
