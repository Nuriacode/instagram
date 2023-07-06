import UsersStories from "./UsersStories";
import "../../styles/profile/storiesNav.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const StoriesNav = ({ listUsers }) => {

  const dataUsers = listUsers.map((eachUser) => {
    return <UsersStories 
    key={eachUser.id}
    eachUser={eachUser} />;
  });
  
  return (
    <InfiniteScroll
    dataLength={listUsers.length}
    className="infiniteScroll"
    >
      <ul className="stories">{dataUsers}</ul>
    </InfiniteScroll>
  );
};

export default StoriesNav;
