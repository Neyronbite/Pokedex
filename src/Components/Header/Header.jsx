import React from "react";
import logo from "src/img/favicon.ico";

const Header = (props) => {
  return (
    <header>
      <img src={logo} className="logo" />
      {props.text}
    </header>
  );
};

Header.defaultProps = {
  text: "header",
};

export default Header;
