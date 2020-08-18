import React,{Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './route/route';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

class App extends Component {
 
 
componentDidMount() {
  this.props.onTryAutoSignup();
}
  render() {
    console.log('App.js')
    return (
      <div className='#'>
        <Router>
          <BaseRouter {...this.props}/>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
