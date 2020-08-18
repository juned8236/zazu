import "./Sidebar.css";
import React from "react";
import logo from '../../static/images/logo.png';
import streamline from '../../static/images/streamline-icon-pie-line-graph-140-x-140.png';

import streamsingle from '../../static/images/streamline-icon-single-neutral-profile-picture-140-x-140-copy.png';
import stream from '../../static/images/streamline-icon-calendar-140-x-140.png';
import streambusiness from '../../static/images/streamline-icon-business-deal-handshake-140-x-140.png';
import { NavLink } from 'react-router-dom'

function template() {
  return (
  <React.Fragment>
     <aside class="sidebar">
          <div class="logo">
            <NavLink to="/date">
              <img src={logo} alt="Zazu" />
            </NavLink>
          </div>
          <ul class="navbar nav">
            <li class="nav-item">
            <NavLink to="/date">
                <img src={stream} alt="Zazu Dates" />
                <span class="menu-text">Dates</span>
                <span class="menu-update">4</span>
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/partner">
                <img src={streambusiness} alt="Zazu Partners" />
                <span class="menu-text">Partners</span>
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/user">
                <img src={streamsingle} alt="Zazu Users" />
                <span class="menu-text">Users</span>
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/stat">
                <img src={streamline} alt="Zazu Statistics" />
                <span class="menu-text">Statistics</span>
              </NavLink>
            </li>
          </ul>
        </aside>
  </React.Fragment>
  );
};

export default template;
