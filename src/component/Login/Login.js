import React    from "react";
import template from "./Login.jsx";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import { withRouter} from 'react-router-dom'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowMask: false,
      'dataObj': {
        email: '',
        password: '',
      },
    };
    this.submit = this.submit.bind(this);
    this.fnPrepareData = this.fnPrepareData.bind(this);
  }
  fnPrepareData(key, value) {
    this.setState({
      dataObj: {
        ...this.state.dataObj,
        [key]: value
      }
    })
  }


  submit() {
    debugger;
    this.props.onAuth(this.state.dataObj.email, this.state.dataObj.password);
    this.setState({
      'dataObj': {
        email: '',
        password: '',
      },
    })
  }

  onCancel() {
    this.setState({
      isShowMask: false,

    })
  }
  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.isAuthenticated) {
      this.props.history.push("/date");
    }else if(nextProps.error && nextProps.error["response"].data["message"]){
      this.setState({
        isShowMask: !this.state.isShowMask,
        error:nextProps.error["response"].data["message"]
      })
    }else if(nextProps.error && nextProps.error["response"].data.errors["Password"]
){
      this.setState({
        isShowMask: !this.state.isShowMask,
        error:nextProps.error["response"].data.errors["Password"]
      })
    }
  }
  render() {
    return template.call(this);
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token,
    isAuthenticated: state.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));