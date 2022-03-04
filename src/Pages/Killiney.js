import React from "react";
import { Card, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const Killiney = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Killiney</Breadcrumb.Item>
      </Breadcrumb>
      <Card title="Killiney" style={{ minHeight: "80vh" }}></Card>
    </div>
  );
};

export default Killiney;
