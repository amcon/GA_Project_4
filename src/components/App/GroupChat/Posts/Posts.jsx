import React, { Component } from 'react';
import styles from './Posts.css';
import UserPost from './UserPost/UserPost.jsx';
import MyPost from './MyPost/MyPost.jsx'


class Posts extends Component {

  renderGroupPosts() {
      // console.log(this.props.posts);
      return this.props.posts.map((post, i) =>
        <UserPost
          key={i}
          post_id={post.post_id}
          image={post.image_url}
          text={post.post_text}
          user_id={post.user_id}
          prof_pic={post.prof_pic}
          handleDeletePost={this.props.handleDeletePost}
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
