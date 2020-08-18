import React    from "react";
import template from "./Input.jsx";

class Input extends React.Component {
  fnChange(e){
    // debugger;
    const {id,value} =e.target;
    this.props.fnPrepareData(id,value);

  }
  render() {
    return template.call(this);
  }
}

export default Input;
