import UsersStories from "./UsersStories";
import "../../styles/profile/storiesNav.scss";


const StoriesNav = ({ listUsers }) => {

  const dataUsers = listUsers.map((eachUser) => {
    return <UsersStories 
    key={eachUser.id}
    eachUser={eachUser}/>;
  });

  const handleClickMove = (ev) => {
    const target= ev.currentTarget
    moveStories(target)
  }

  const moveStories = () => {
    "move-x"
  }
  
  return (
    <>
    <div className="arrowIcons">
      <i className={`arrowIcons__left fa-solid fa-circle-chevron-left`}></i>
      <i className="arrowIcons__right  fa-solid fa-circle-chevron-right"
      onClick={handleClickMove}
      ></i>
     </div>
      <ul className={`stories ${moveStories()}`}>{dataUsers}</ul>
   </>
  );
};

export default StoriesNav;
