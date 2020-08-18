import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../component/Login/index';
import {isLogin} from './utils1';
import Partners from '../component/Partners/index';
import Users from '../component/Users/index';
import Dates from '../component/Dates/index';
import Statistics from '../component/Statistics/index';

const BaseRouter = ({...props}) => (

  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute exact path="/partner" component={Partners} />
    <PrivateRoute exact path="/user" component={Users} />
    <PrivateRoute exact path="/date" component={Dates} />
    <PrivateRoute exact path="/stat" component={Statistics} />

</Switch>
);

const PrivateRoute = ({ component: Component, ...rest }) => {
  return ( <Route
    {...rest}
    render={props =>
      isLogin()? 
        <Component {...props} />
       : 
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      
    }
  />)
  };

export default BaseRouter
