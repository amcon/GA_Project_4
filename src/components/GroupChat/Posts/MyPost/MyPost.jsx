import React, { Component } from 'react';
import styles from './MyPost.css';

class MyPost extends Component {
  render() {
    return (
      <div className={styles["my-post"]}>
        <button>X</button>
        <div className={styles["post-content"]}>
          <p>POST TEXT GOES HERE</p>
          <img src="" alt="post-image" />
        </div>
        <img id={styles["prof-pic"]} src="http://market.ionic.io/img/user-default.png" alt="" />
      </div>
    );
  }
}

export default MyPost;
