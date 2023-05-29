import FeedProfile from "./FeedProfile";
import HeaderProfile from "./HeaderProfile";
import NavProfile from "./NavProfile";


const ProfilePage = () => {
    return (
        <>
        <div className="profilePage">
        <HeaderProfile/>
        <FeedProfile/>
        <NavProfile/>
        </div>
        </>
    )
}

export default ProfilePage;