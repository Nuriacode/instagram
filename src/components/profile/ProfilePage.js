import { useEffect, useState } from "react";
import FeedProfile from "./FeedProfile";
import HeaderProfile from "./HeaderProfile";
import NavProfile from "./NavProfile";
import getDataPictures from "../../services/apiImages";


const ProfilePage = () => {
    const [listImages, setListImages] = useState([]);

    useEffect(() => {
    getDataPictures().then((dataImages) => {
      setListImages(dataImages);
    });
  }, []);


    return (
        <>
        <div className="profilePage">
        <HeaderProfile
        />
        <FeedProfile
        listImages={listImages}
        />
        <NavProfile
        />
        </div>
        </>
    )
}

export default ProfilePage;