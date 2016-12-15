import React, { Component } from 'react';
import styles from './SideBar.css';
import Profile from './Profile/Profile.jsx';
import MyGroups from './MyGroups/MyGroups.jsx';
import GroupsImIn from './GroupsImIn/GroupsImIn.jsx';
import LogOut from './LogOut/LogOut.jsx';
import CreateGroup from './CreateGroup/CreateGroup.jsx';

class SideBar extends Component {
  // function maps through the groups array and creates the MyGroups component
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
  // see above
  renderGroupsImIn() {
    return this.props.groups_im_in.map((group, i) =>
        <GroupsImIn
          key={i}
          group_name={group.group_name}
          group_id={group.group_id}
          admin_id={group.admin_id}
          getClickedGroup={this.props.getClickedGroup}
        />
      );
  }
  // this will make the creategroup component render if the state is true (when clicked)
  renderCreateGroup() {
    if (this.props.showGroupForm == true) {
    return (
        <CreateGroup />
      );
    }
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
          updateProfileUserName={this.props.updateProfileUserName}
          updateProfileEmail={this.props.updateProfileEmail}
          updateProfilePassword={this.props.updateProfilePassword}
          updateProfilePic={this.props.updateProfilePic}
          handleProfileEditSubmit={this.props.handleProfileEditSubmit}
          showUserForm={this.props.showUserForm}
          changeUserFormState={this.props.changeUserFormState}
        />
        <div className={styles["group-container"]}>
          <div>
          <h3>Groups I Created:</h3>
          {this.renderAdminGroups()}
          </div>
          <div>
          <h3>Groups I'm In:</h3>
          {this.renderGroupsImIn()}
          </div>
          <p onClick={() => this.props.changeGroupFormState()}>+ Create Group</p>
        </div>
        <div>
          {this.renderCreateGroup()}
        </div>
        <LogOut />
      </div>
    );
  }
}

export default SideBar;
