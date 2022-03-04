import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <HomeOutlined style={{ fontSize: '30px' }}/>
      </Link>
      <h3>Top Spot</h3>
      <Link to="/">
        <UserOutlined style={{ fontSize: '30px' }}/>
      </Link>
    </nav>
  );
}

export default Nav;
