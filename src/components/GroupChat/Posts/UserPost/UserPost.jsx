import React, { Component } from 'react';
import styles from './UserPost.css';

class UserPost extends Component {
  render() {
    return (
      <div className={styles["user-post"]}>
        <img id={styles["prof-pic"]} src="http://market.ionic.io/img/user-default.png" alt="" />
        <div className={styles["post-content"]}>
          <p>POST TEXT GOES HERE</p>
          <img src="" alt="post-image" />
        </div>
      </div>
    );
  }
}

export default UserPost;
