import React, {Component} from 'react';
import {connect} from "react-redux";

import Content from './components/Content'
import {userDataLoad} from './state/userData'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData.users[0]
    };
  }

  componentDidMount() {
    this.props.userDataLoad(this.state.userData)
  }

  render() {
    return (
        <Content/>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    userDataLoad: (userData) => dispatch(userDataLoad(userData))
  })
)(App)
