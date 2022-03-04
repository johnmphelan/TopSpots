import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const gridStyle = {
  width: "50%",
  textAlign: "center",
};

function TopLoactionCard(props) {
  return (
    <Link to={props.locationRoot}>
      <Card title={props.locationName} style={{ width: 300, marginBottom: 20 }}>
        <Card.Grid style={gridStyle}>
          <ul>
            <li>Walks</li>
            <li>History</li>
            <li>Food</li>
            <li>Rowing</li>
          </ul>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <img width="150" height="100" alt="example" src={props.locationImage} objectFit="cover"/>
        </Card.Grid>
      </Card>
    </Link>
  );
}

export default TopLoactionCard;
