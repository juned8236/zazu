import "./Dates.css";
import React from "react";
import Sidebar from '../Sidebar/index';
import Datedata from '../Datedata/index';
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
          
          <Datedata />
          
          
          
          
          
           </div>
        </aside>
      </div>
    </div>
  
    </React.Fragment>
  );
};

export default template;
