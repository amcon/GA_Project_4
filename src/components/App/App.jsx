import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import GroupChat from './GroupChat/GroupChat.jsx';
import SideBar from './SideBar/SideBar.jsx';

class App extends Component {
  // set initial state
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
        profUserName: '',
        profEmail: '',
        profPassword: '',
        profPic: '',
        clickedGroup: 1,
        showGroupForm: false,
        showUserForm: false,
      };
    }
    // getUser is my frontend fetch call to my user route to get the user information, set state,
    // and be able to pass props to my children components **currently set static until user auth is set
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
    // getGroupsIAdmin is the front end call to set state/render the "groups I created" data in the sidebar
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
    // similar to groupsIAdmin, this gets all the groups the user is in
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
    // this is the fetch that gets all the information that will be passed to the GroupChat component
    getDefaultGroup() {
      fetch(`/api/groups/${this.state.clickedGroup}`)
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
    // this is the function that when clicked in GroupsImIn, it sets the state to the selected group and calls
    // getDefaultGroup to rerender the group component.
    getClickedGroup(id) {
      console.log("I'm firing", id)
      // let clickedGroup;
      // this.state.groups_im_in.forEach((group) => {
      //     if(group.group_id = id) ;
      //   });
        this.setState({ clickedGroup: id });
        this.getDefaultGroup();
    }

    // runClickedGroup() {
    //   fetch(`api/groups/${this.state.clickedGroup}`)
    //   .then(r => r.json())
    //   .then((data) => {
    //     this.setState({
    //       getPosts: data.get_posts,
    //       getUsers: data.get_users,
    //       group: data.group_info
    //     });
    //   })
    // }

    // these "update" functions gets the value typed in the form inputs to update/submit values
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
    // handleFormSubmit runs the fetch call to create and post a new post to the group its in.
    handleFormSubmit() {
      fetch(`/api/groups/${this.state.clickedGroup}`, {
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
    // updates state
    updateProfileUserName(e) {
      this.setState({
        profUserName: e.target.value,
      });
    }

    updateProfileEmail(e) {
      this.setState({
        profEmail: e.target.value,
      });
    }

    updateProfilePassword(e) {
      this.setState({
        profPassword: e.target.value,
      });
    }

    updateProfilePic(e) {
      this.setState({
        profPic: e.target.value,
      })
    }
    // handleProfileEditSubmit edits the profile information with the inputs typed in the form in sidebar
    handleProfileEditSubmit() {
      fetch('/api/users/1', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          email: this.state.profEmail,
          password: this.state.profPassword,
          profile_pic: this.state.profPic,
          user_name: this.state.profUserName,
        })
      })
      .then(this.setState({
        profUserName: this.state.user.user_name,
        profEmail: this.state.user.email,
        profPassword: this.state.user.password,
        profPic: this.state.user.profile_pic,
      }))
      .then(() => this.getUser())
      .catch(err => console.log(err));
    }
    // this fetch call will delete the selected post from the database
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
    // these change functions toggle the state from false to true to render the create/update components when
    // clicked in the sidebar
    changeGroupFormState() {
      this.setState({
        showGroupForm: true,
      })
    }

    changeUserFormState() {
      this.setState({
        showUserForm: true,
      })
    }
    // when the components mount, it will run the following functions
    componentWillMount() {
    this.getUser();
    this.getGroupsIAdmin();
    this.getGroupsImIn();
    this.getDefaultGroup();
   }
   // passing state/functions to be used as props in children components
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
              showGroupForm={this.state.showGroupForm}
              showUserForm={this.state.showUserForm}
              updateProfileUserName={event => this.updateProfileUserName(event)}
              updateProfileEmail={event => this.updateProfileEmail(event)}
              updateProfilePassword={event => this.updateProfilePassword(event)}
              updateProfilePic={event => this.updateProfilePic(event)}
              handleProfileEditSubmit={() => this.handleProfileEditSubmit()}
              getClickedGroup={(id) => this.getClickedGroup(id)}
              changeGroupFormState={event => this.changeGroupFormState(event)}
              changeUserFormState={event => this.changeUserFormState(event)}
            />
          </div>
        </div>
      );
    }
  }

export default App;
