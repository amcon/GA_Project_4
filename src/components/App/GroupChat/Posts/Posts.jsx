import React, { Component } from 'react';
import styles from './Posts.css';
import UserPost from './UserPost/UserPost.jsx';
import MyPost from './MyPost/MyPost.jsx'


class Posts extends Component {
  render() {
    return (
      <div className={styles["posts"]}>
        <UserPost />
        <MyPost />
        <UserPost />
        <UserPost />
        <MyPost />
      </div>
    );
  }
}

export default Posts;
