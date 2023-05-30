import { useEffect, useState } from "react";
import "../../styles/profile/feedProfile.scss";
import StoriesNav from "./StoriesNav";
import getDataUsers from "../../services/api";


const FeedProfile = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(()=>{
        getDataUsers().then((dataUsers) =>{
            setListUsers(dataUsers)
        })
    }, []);





    return (
        <div className="feedProfile">
        <StoriesNav
        listUsers={listUsers}
        />
        </div>
    )

}

export default FeedProfile;