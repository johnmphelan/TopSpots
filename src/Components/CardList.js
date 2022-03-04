import LocationCard from "../Components/LocationCard";
import { List } from "antd";
import { Link } from "react-router-dom";

function CardList(props) {
  return (
    <>
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
}

export default CardList;
