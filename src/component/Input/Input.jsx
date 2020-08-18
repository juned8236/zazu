import "./Input.css";
import React from "react";

function template() {
  const { label,disabled ,defaultValue, type, id, value, className, placeholder,password1,password2,span,newpass1,oldpass,newpass2 } = this.props

  return (
    <React.Fragment>
        <input id={id} disabled ={disabled} defaultValue={defaultValue} type={type} value={value} className={className} password1={password1} password2= {password2}  newpass1={newpass1} oldpass ={oldpass} newpass2={newpass2}
        onChange={this.fnChange.bind(this)}  placeholder={placeholder} name=''/>

    </React.Fragment>
  );
};

export default template;
