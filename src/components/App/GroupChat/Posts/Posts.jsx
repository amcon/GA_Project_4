import React, { Component } from 'react';
import styles from './Posts.css';
import UserPost from './UserPost/UserPost.jsx';
import MyPost from './MyPost/MyPost.jsx'


class Posts extends Component {

  renderGroupPosts() {
      return this.props.posts.map((post, i) =>
        <UserPost
          key={i}
          image={post.image_url}
          text={post.post_text}
          user_id={post.user_id}
          prof_pic={post.prof_pic}
          />
      );
    }

  render() {
    return (
      <div className={styles["posts"]}>
        {this.renderGroupPosts()}
      </div>
    );
  }
}

export default Posts;
