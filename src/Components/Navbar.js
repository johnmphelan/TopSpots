import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHAndler = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navBbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Logo
          </Link>
          <div>{click ? <MenuOutlined /> : <CloseOutlined />}</div>
          {/** 
           * ul, with li's, that contain links
          */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
