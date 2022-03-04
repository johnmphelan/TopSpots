import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import AppBreadcrumb from "../Components/AppBreadcrumb";
import AboutList from "../Components/AboutList";
import { LeixlipLocations } from "../Data/SecondLevelLocations";

const locationName = "Leixlip";

const Leixlip = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <AppBreadcrumb root="Home" secondNode={locationName}></AppBreadcrumb>
      <AboutList dataSource={LeixlipLocations}></AboutList>
    </div>
  );
};

export default Leixlip;
