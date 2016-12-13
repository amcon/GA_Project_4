import React, { Component } from 'react';
import styles from './UserPost.css';

class UserPost extends Component {
  render() {
    return (
      <div className={styles["user-post"]}>
        <img id={styles["prof-pic"]} src={this.props.prof_pic} alt="" />
        <div className={styles["post-content"]}>
          <p>{this.props.text}</p>
          <img src={this.props.image} alt="post-image" />
        </div>
      </div>
    );
  }
}

export default UserPost;
