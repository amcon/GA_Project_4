import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import styles from './CreatePost.css';


class CreatePost extends Component {
  render() {
    return (
      <div className={styles["create-post"]}>
        <div className={styles["choose"]}>
          <img src={this.props.user.profile_pic} alt="" />
        </div>
        <textarea
          className={styles["text"]}
          cols="40"
          rows="5"
          placeholder="What's on your mind?"
          value={this.props.postFormText}
          onChange={this.props.updateFormText}
          />
        <DropZone
          className={styles['drop-zone']}
          multiple={false}
          accept="image/*"><p>+</p>
        </DropZone>
        <div className={styles["useless-inputs"]}>
          <p>post pic:
            <input
              type="text"
              value={this.props.postFormPic}
              onChange={this.props.updateFormPic}
            />
          </p>
        </div>
        <button onClick={this.props.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}

export default CreatePost;
