import React from "react";
import { Card, List } from "antd";
import { Link } from "react-router-dom";
import { CarOutlined } from "@ant-design/icons";

function AboutList(props) {
  return (
    //<Card style={{ paddingLeft: "40px", paddingTop: "20px" }}> // <CarOutlined /> <HomeOutlined style={{ fontSize: '30px' }}/>
    <List
      // prettier-ignore
      grid={{gutter: 16,xs:1,sm: 2,md:4,lg:4,xl:6,xxl:3,}}
      dataSource={props.dataSource}
      renderItem={(item) => (
        <List.Item>
          <Link key={item.id} to="/about" state={item}>
            <Card title={item.name} extra={<CarOutlined />} style={{minWidth:190}}> 
              <img
                width="100%"
                height="200"
                alt="example"
                src={item.imagePath}
                //style={{ objectFit: "fill" }}
              />
            </Card>
          </Link>
        </List.Item>
      )}
      
    />
    //</Card>
  );
}

export default AboutList;
