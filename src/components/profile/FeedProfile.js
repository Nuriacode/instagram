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

  return (
    <>
      <div className="feedProfile">
        <StoriesNav listUsers={listUsers} />
      </div>
        <InfiniteScroll
          dataLength={listUsers.length}
          className="feedImages"
        >
          <ul>
            <li key={listUsers.id}>
                <p>{listUsers.name}</p>
            </li>
          </ul>
        </InfiniteScroll>
    </>
  );
};

export default FeedProfile;
