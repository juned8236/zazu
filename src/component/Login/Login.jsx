import "./Login.css";
import React from "react";
import bannerlogin from '../../static/images/banner-login.jpg';
import { NavLink } from 'react-router-dom'
import Loader from "../Loader/index";
import logo from '../../static/images/logo-2x.png';
import Input from '../Input/index';
import SweetAlert from 'react-bootstrap-sweetalert';

function template() {
  const { email, password } = this.state.dataObj;

  return (
    <React.Fragment>
      {this.props.loading ? 
      <Loader /> :
      <div className="login-container" style={{ backgroundImage: "url(" + bannerlogin +")" }} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <a href="javascript:void(0);" className="login-logo">
              {/* <img src="images/logo-2x.png"> */}
              <img src={logo} className="logo" alt="" />

            </a>
          </div>
          <div className="col-12 col-md-10 col-lg-7">
            <div className="login">
              <h2>Log in to continue...</h2>
              <form className="login-form">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                    <Input  type='email' className="form-control" id="email" val={email} required placeholder="Email Address" fnPrepareData={this.fnPrepareData} />

                      {/* <input type="email" className="form-control" placeholder="Email Address" name="" /> */}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                    <Input type='password' className="form-control" id="password" val={password} required placeholder="Password" fnPrepareData={this.fnPrepareData} />

                      {/* <input type="password" className="form-control" placeholder="Password" name="" /> */}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="login-actions">
                      <button type="submit" className="btn btn-pink mb-2" onClick={this.submit.bind(this)}>Log in</button>
                      <a href="javascript:void(0);" className="text-pink">
                        forgot Password
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   }
   {
       this.state.isShowMask  && <SweetAlert 
       title={this.state.error}
       onConfirm={this.onCancel.bind(this)}
        onCancel={this.onCancel.bind(this)}
         />

      }
 </React.Fragment>

  );
};

export default template;
