import React    from "react";
import template from "./Logout.jsx";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {
      profile_dropdown: true,
      navigate: false,
      data : []
    }
  }
  signout() {
    localStorage.clear('token');
    this.setState({ navigate: true });
    this.props.logouts()
  }
  render() {
    return template.call(this);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logouts: () => dispatch(actions.logout()),
  }
}
export default connect(null,mapDispatchToProps)(Logout);