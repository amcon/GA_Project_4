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
        console.log(this.state.group);
      })
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
