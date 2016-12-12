import React, { Component } from 'react';
import styles from './SideBar.css';
import Profile from './Profile/Profile.jsx';
import MyGroups from './MyGroups/MyGroups.jsx';
import GroupsImIn from './GroupsImIn/GroupsImIn.jsx';
import LogOut from './LogOut/LogOut.jsx';
import CreateGroup from './CreateGroup/CreateGroup.jsx';

class SideBar extends Component {

  renderAdminGroups() {
    return this.props.admin_groups.map((group, i) =>
        <MyGroups
          key={i}
          group_name={group.group_name}
          group_id={group.group_id}
          admin_id={group.admin_id}
        />
      );
  }

  renderGroupsImIn() {
    return this.props.groups_im_in.map((group, i) =>
        <GroupsImIn
          key={i}
          group_name={group.group_name}
          group_id={group.group_id}
          admin_id={group.admin_id}
        />
      );
  }

  render() {
    return (
      <div className={styles["side-bar"]}>
        <Profile
          user_id={this.props.user.user_id}
          user_name={this.props.user.user_name}
          email={this.props.user.email}
          profile_pic={this.props.user.profile_pic}
          password={this.props.user.password}
        />
        <div className={styles["group-container"]}>
          <h3>Groups I Created</h3>
          {this.renderAdminGroups()}
          <h3>Groups I'm In</h3>
          {this.renderGroupsImIn()}
          <p>+ Create Group</p>
        </div>
        <CreateGroup />
        <LogOut />
      </div>
    );
  }
}

export default SideBar;
