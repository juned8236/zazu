import "./Partners.css";
import React from "react";
import Sidebar from '../Sidebar/index';
import Logout from '../Logout/index';

function template() {
  return (
   
    <React.Fragment>
        <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <aside class="body-container">
          <div class="container-fluid">
            {/* <!-- Search with user profile option --> */}
            <div class="row">
              <div class="col-12">
                <div class="header-option">
                  <div class="input-search">
                    <input type="text" class="form-control" placeholder="Search Users" />
                    <i class="flaticon-search"></i>
                  </div>
                  <div class="header-actions">
                  <Logout />

                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Search with user profile option --> */}
            {/* <!-- Page Title --> */}
          
            <div class="row mt-56 mb-30">
              <div class="col-12">
                <div class="page-title">
                  <h2>Partner management</h2>
                  <button class="btn" type="submit">Add new partner</button>
                </div>
              </div>
            </div>
            {/* <!-- Page Title --> */}
          
          
          
          
           </div>
        </aside>
      </div>
    </div>
  
    </React.Fragment>
  
  );
};

export default template;
