import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header.jsx';
import GroupChat from './GroupChat/GroupChat.jsx';
import SideBar from './SideBar/SideBar.jsx';

class App extends Component {
  // constructor(props){
  //   super(props){
  //     this.state = {

  //     }
  //   }
  // }
  render() {
    return (
      <div className={styles['App']}>
        <Header />
        <div className={styles["content"]}>
          <GroupChat />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default App;
