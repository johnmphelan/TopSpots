import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

function LocationCard(props) {
  return (
    // Margin bottomensures the images don't overlap when we resize for mobil, as we have a fixed image height!
    <Card hoverable title={props.title} style={{ height: "150px", marginBottom: "120px" }}> 
      <img // It works when the width is 100% and the height is defined!
        width="100%"
        height="200"
        alt="example"
        src={props.imagePath} //"/Images/1_wonderful_barn.png"
        // style={{ resizeMode: "contain", flex: 1 }}
        style={{ objectFit: "fill", flex: 1, marginBottom: 5 }} // maxHeight: 180
      />
    </Card>
  );
}

////flex: 1,
//width: '100%',
//height: '100%',
//resizeMode: 'contain',
// objectFit fill

export default LocationCard;
