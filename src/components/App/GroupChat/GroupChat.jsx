import React, { Component } from 'react';
import styles from './GroupChat.css';
import GroupHeader from './GroupHeader/GroupHeader.jsx';
import Posts from './Posts/Posts.jsx';
import CreatePost from './CreatePost/CreatePost.jsx';

class GroupChat extends Component {

  renderGroupsUsers() {
    // console.log(this.props.group);
    return this.props.users.map((user, i) =>
        <GroupHeader
          key={i}
          user_name={user.user_name}
        />
      );
  }

  render() {
    return (
      <div className={styles["group-chat"]}>
        <div className={styles["group-header"]}>
          <h2>{this.props.group.group_name}</h2>
          <div>Users: {this.renderGroupsUsers()}</div>
        </div>
        <CreatePost
          user={this.props.user}
          postFormText={this.props.postFormText}
          postFormPic={this.props.postFormPic}
          updateFormText={this.props.updateFormText}
          updateFormPic={this.props.updateFormPic}
          handleFormSubmit={this.props.handleFormSubmit}
        />
        <div className={styles["post-box"]}>
          <Posts
            posts={this.props.posts}
            handleDeletePost={this.props.handleDeletePost}
          />
        </div>
      </div>
    );
  }
}

export default GroupChat;
