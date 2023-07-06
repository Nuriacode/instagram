import { useEffect, useState } from "react";
import "../../styles/profile/feedProfile.scss";
import StoriesNav from "./StoriesNav";
import FeedImages from "./FeedImages";
import getDataUsers from "../../services/api";
import InfiniteScroll from "react-infinite-scroll-component";
import getDataPictures from "../../services/apiImages";

const FeedProfile = () => {
  const [listUsers, setListUsers] = useState([]);
  const [listImages, setListImages] = useState([]);

  useEffect(() => {
    getDataUsers().then((dataUsers) => {
      // console.log(dataUsers);
      setListUsers(dataUsers);
    });
  }, []);
  // console.log(listUsers)
  useEffect(() => {
    getDataPictures().then((dataImages) => {
      setListImages(dataImages);
    });
  }, []);

  return (
    <>
      <StoriesNav className="allFeed__feedProfile" listUsers={listUsers} />

      <FeedImages listUsers={listUsers} listImages={listImages} />
    </>
  );
};

export default FeedProfile;
