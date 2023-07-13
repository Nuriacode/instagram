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
    containerRef.current.scrollLeft -= 230;
  };
  
  const scrollRight = () => {
    containerRef.current.scrollLeft += 230;
  };

  
  
  return (
    <div className="divNavStories">
    <div className="divNavStories__arrowIcons">
      <i className="divNavStories__arrowIcons__left fa-solid fa-circle-chevron-left"
      onClick={scrollLeft}
      ></i>
      <i className="divNavStories__arrowIcons__right  fa-solid fa-circle-chevron-right"
      onClick={scrollRight}
      ></i>
     </div>
      <ul className="divNavStories__stories" ref={containerRef}>{dataUsers}</ul>
   </div>
  );
};

export default StoriesNav;
