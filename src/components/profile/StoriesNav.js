import UsersStories from "./UsersStories";
import "../../styles/profile/storiesNav.scss";
import { useRef } from "react";


const StoriesNav = ({ listUsers }) => {

  const dataUsers = listUsers.map((eachUser) => {
    return <UsersStories 
    key={eachUser.id}
    eachUser={eachUser}/>;
  });
  
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 300;
  };
  
  const scrollRight = () => {
    containerRef.current.scrollLeft += 300;
  };

  
  
  return (
    <>
    <div className="arrowIcons">
      <i className={`arrowIcons__left fa-solid fa-circle-chevron-left`}
      onClick={scrollLeft}
      ></i>
      <i className="arrowIcons__right  fa-solid fa-circle-chevron-right"
      onClick={scrollRight}
      ></i>
     </div>
      <ul className={`stories`} ref={containerRef}>{dataUsers}</ul>
   </>
  );
};

export default StoriesNav;
