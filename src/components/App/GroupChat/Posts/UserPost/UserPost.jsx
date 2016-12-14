import React, { Component } from 'react';
import styles from './UserPost.css';

class UserPost extends Component {
  render() {
    return (
      <div className={styles["user-post"]}>
        <img id={styles["prof-pic"]} src={this.props.prof_pic} />
        <div className={styles["post-content"]}>
          <div className={styles["text"]}>
            <p>{this.props.text}</p>
          </div>
          <img src={this.props.image} />
        </div>
        <button onClick={() => this.props.handleDeletePost(this.props.post_id)}>X</button>
      </div>
    );
  }
}

export default UserPost;
