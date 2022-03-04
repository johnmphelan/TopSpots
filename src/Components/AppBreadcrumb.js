import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

function AppBreadcrumb(props) {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link to="/">{props.root}</Link>
      </Breadcrumb.Item>
      {props.secondNode != undefined && (
        <Breadcrumb.Item>
          <Link to={"/" + props.secondNode}>{props.secondNode}</Link>
        </Breadcrumb.Item>
      )}
      {props.thirdNode != undefined && (
        <Breadcrumb.Item>{props.thirdNode}</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default AppBreadcrumb;
