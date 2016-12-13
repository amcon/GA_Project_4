import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import GroupChat from './GroupChat/GroupChat.jsx';
import SideBar from './SideBar/SideBar.jsx';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: [],
        users: [],
        admin_groups: [],
        groups_im_in: [],
        group: [],
        getPosts: [],
        getUsers: [],
        posts: [],
        postFormText: '',
        postFormUserId: 0,
        postFormProfPic: '',
        postFormPic: '',
      };
    }

    getUser() {
      fetch(`/api/users/1`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          user: data
        });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
    }

    getGroupsIAdmin() {
      fetch(`/api/groups/users/1/admin`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          admin_groups: data
        });
        // console.log(this.state.admin_groups);
      })
      .catch(err => console.log(err));
    }

    getGroupsImIn() {
      fetch(`/api/groups/users/1/groups`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          groups_im_in: data
        });
        // console.log(this.state.groups_im_in);
      })
    }

    getDefaultGroup() {
      fetch(`/api/groups/1`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          getPosts: data.get_posts,
          getUsers: data.get_users,
          group: data.group_info
        });
        // console.log(this.state.getPosts);
      })
    }

    updateFormText(e) {
      this.setState({
        postFormText: e.target.value,
      });
    }

    updateFormPic(e) {
      this.setState({
        postFormPic: e.target.value,
      });
    }

    // updateFormUserId(e) {
    //   this.setState({
    //     postFormUserId: parseInt(e.target.value),
    //   });
    // }

    // updateFormProfPic(e) {
    //   this.setState({
    //     postFormProfPic: e.target.value,
    //   });
    // }

    handleFormSubmit() {
      fetch('/api/groups/1', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          post_text: this.state.postFormText,
          image_url: this.state.postFormPic,
          prof_pic: this.state.user.profile_pic,
          user_id: parseInt(this.state.user.user_id),
        })
      })
      .then(this.setState({
        postFormText: '',
        postFormPic: '',
        // postFormProfPic: '',
        // postFormUserId: 0,
      }))
      .then(() => this.getDefaultGroup())
      .catch(err => console.log(err));
    }

    handleDeletePost(id) {
      fetch(`/api/groups/1/${id}`, {
        method: 'delete'
      })
      .then(() => {
        let posts = this.state.getPosts.filter((post) => {
          return post.post_id != post.post_id;
        });
        this.setState({ posts })
      })
      .then(() =>this.getDefaultGroup())
      .catch(err => console.log(err));
    }

    componentWillMount() {
    this.getUser();
    this.getGroupsIAdmin();
    this.getGroupsImIn();
    this.getDefaultGroup();
   }

    render() {
      return (
        <div className={styles['App']}>
          <Header />
          <div className={styles["content"]}>
            <GroupChat
              group={this.state.group}
              users={this.state.getUsers}
              posts={this.state.getPosts}
              user={this.state.user}
              postFormText={this.state.postFormText}
              postFormPic={this.state.postFormPic}
              postFormUserId={this.state.postFormUserId}
              postFormProfPic={this.state.postFormProfPic}
              updateFormText={event => this.updateFormText(event)}
              updateFormPic={event => this.updateFormPic(event)}
              updateFormUserId={event => this.updateFormUserId(event)}
              updateFormProfPic={event => this.updateFormProfPic(event)}
              handleFormSubmit={() => this.handleFormSubmit()}
              handleDeletePost={this.handleDeletePost.bind(this)}
            />
            <SideBar
              user={this.state.user}
              admin_groups={this.state.admin_groups}
              groups_im_in={this.state.groups_im_in}
            />
          </div>
        </div>
      );
    }
  }

export default App;
