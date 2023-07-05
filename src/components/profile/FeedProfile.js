import { useEffect, useState } from "react";
import "../../styles/profile/feedProfile.scss";
import StoriesNav from "./StoriesNav";
import getDataUsers from "../../services/api";
import InfiniteScroll from "react-infinite-scroll-component";

const FeedProfile = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getDataUsers().then((dataUsers) => {
      console.log(dataUsers);
      setListUsers(dataUsers);
    });
  }, []);
  console.log(listUsers)



  return (
    <>
    <InfiniteScroll
          dataLength={listUsers.length}
          className="allFeed"
        >
      <div className="allFeed__feedProfile">
        <StoriesNav listUsers={listUsers} />
      </div>
          <ul key={listUsers.id}>
            <li >
                <p>{listUsers.name}</p>
            </li>
          </ul>
        </InfiniteScroll>
    </>
  );
};

export default FeedProfile;
