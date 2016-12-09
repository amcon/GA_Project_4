import React, { Component } from 'react';
import styles from './GroupChat.css';
import GroupHeader from './GroupHeader/GroupHeader.jsx';
import Posts from './Posts/Posts.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';


class GroupChat extends Component {
  render() {
    return (
      <div className={styles["group-chat"]}>
        <GroupHeader />
        <div className={styles["post-box"]}>
          <Posts />
        </div>
        <CreatePost />
      </div>
    );
  }
}

export default GroupChat;
