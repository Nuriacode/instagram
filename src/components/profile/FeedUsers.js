import "../../styles/profile/feedUsers.scss";

const FeedUsers = ({ eachUserFeed, listImages }) => {
  // const dataImages = listImages.map ((eachImage) => {
  //   return (
  //     <>
  //     <img id="0" src="https://picsum.photos/id/0/5000/3333" alt={eachImage.url}/>
  //     </>
  //   )
  // })

  return (
    <li className="feedUserList">
      <div className="feedUserList__divUser">
        <div className="feedUserList__divUser__user">
          <img
            className="feedUserList__divUser__user--imguser"
            src={eachUserFeed.photo}
            alt={eachUserFeed.name}
          />
          <h2 className="feedUserList__divUser__user--text">
            {eachUserFeed.name}
          </h2>
        </div>
        <div className="feedUserList__divIcon">
          <i className="feedUserList__divIcon--icon fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="feedUserList__image">
        <img
          className="feedUserList__image--img"
          src="https://picsum.photos/id/7/4728/3168"
          alt="pictures"
        />
      </div>
      <div className="feedUserList__icons">
        <div>
          <i className="feedUserList__icons--icon fa-regular fa-heart"></i>
          <i className="feedUserList__icons--icon fa-regular fa-comment"></i>
          <i className="feedUserList__icons--icon fa-regular fa-paper-plane"></i>
        </div>

        <i className="fa-regular fa-bookmark"></i>
      </div>
    </li>
  );
};

export default FeedUsers;
