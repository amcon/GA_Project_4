import React, { Component } from 'react';
import styles from './SideBar.css';
import Profile from './Profile/Profile.jsx';
import MyGroups from './MyGroups/MyGroups.jsx';
import LogOut from './LogOut/LogOut.jsx';
import CreateGroup from './CreateGroup/CreateGroup.jsx';

class SideBar extends Component {
  render() {
    return (
      <div className={styles["side-bar"]}>
        <Profile />
        <MyGroups />
        <CreateGroup />
        <LogOut />
      </div>
    );
  }
}

export default SideBar;
