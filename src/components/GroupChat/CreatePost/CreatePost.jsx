import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import styles from './CreatePost.css';


class CreatePost extends Component {
  render() {
    return (
      <div className={styles["create-post"]}>
        <div className={styles["choose"]}>
          <img src="http://market.ionic.io/img/user-default.png" alt="" />
        </div>
        <textarea className={styles["text"]} cols="40" rows="5" placeholder="What's on your mind?" />
        <DropZone
          className={styles['drop-zone']}
          multiple={false}
          accept="image/*"><p>+</p>
        </DropZone>
        <button>Submit</button>
      </div>
    );
  }
}

export default CreatePost;
