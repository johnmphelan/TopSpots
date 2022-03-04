import { useLocation, Link } from "react-router-dom";
import { Card, List, Row, Col } from "antd";
import AppBreadcrumb from "../Components/AppBreadcrumb";
import LocationCard from "../Components/LocationCard";
import { CarOutlined } from "@ant-design/icons";

const AboutPage = (props) => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <AppBreadcrumb
        root="Home"
        secondNode={state.parentPage}
        thirdNode={state.name}
      ></AppBreadcrumb>
      {state && (
        <div>
          <Card
            title={state.name}
            extra={
              <span>
                <CarOutlined /> 5 km
              </span>
            }
            style={{ minHeight: "80vh" }}
          >
            {/**
            <Link to="/">Go Home</Link>
             */}
              <Row gutter={30}>
                <Col span={6}>Imag</Col>
                <Col span={6}>Stars</Col>
                <Col span={6}>Stars</Col>
              </Row>
          </Card>
        </div>
      )}

      <List
        // prettier-ignore
        grid={{gutter: 16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3,}}
        dataSource={props.listDataSource}
        renderItem={(item) => (
          <List.Item>
            <Link to={item.pathTo}>
              <LocationCard
                title={item.title}
                imagePath={item.imagePath}
              ></LocationCard>
            </Link>
          </List.Item>
        )}
      />
    </>
  );
};

export default AboutPage;
