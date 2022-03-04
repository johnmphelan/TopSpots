import "antd/dist/antd.css";
import AppBreadcrumb from "../Components/AppBreadcrumb";
import { TopLevelLocations } from "../Data/TopLevelLocations";
import CardList from "../Components/CardList";

function Home() {
  return (
    <div style={{ minHeight: "80vh" }}>
      <AppBreadcrumb root="Home"></AppBreadcrumb>
      <CardList listDataSource={TopLevelLocations}></CardList>
    </div>
  );
}

export default Home;
