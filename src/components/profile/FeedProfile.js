import { useEffect, useState } from "react";
import "../../styles/profile/feedProfile.scss";
import StoriesNav from "./StoriesNav";
import FeedImages from "./FeedImages";
import getDataUsers from "../../services/api";


const FeedProfile = ({listImages}) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getDataUsers().then((dataUsers) => {
      // console.log(dataUsers);
      setListUsers(dataUsers);
    });
  }, []);
 

  return (
    <>
      <StoriesNav 
      listUsers={listUsers} />

      <FeedImages listUsers={listUsers} listImages={listImages} />

    </>
  );
};

export default FeedProfile;
