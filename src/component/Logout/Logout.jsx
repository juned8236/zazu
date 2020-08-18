import "./Logout.css";
import React from "react";

function template() {
  return (
    <div class={this.state.profile_dropdown ? 'dropdown user-options' : 'dropdown user-options show'}    >
                      <button class="dropdown-toggle" onClick={() => this.setState({ profile_dropdown: !this.state.profile_dropdown })} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="short-name">VC</span>
                        <span class="full-name">Vicky Chand</span>
                      </button>
                      <div class={this.state.profile_dropdown ? 'dropdown-menu' : 'dropdown-menu show'} aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" onClick = {this.signout.bind(this)}>Logout</a>
                      </div>
                    </div>
  );
};

export default template;

