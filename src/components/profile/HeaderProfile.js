import instagramblack from "../../images/instagramblack.png";
import "../../styles/profile/headerProfile.scss";

const HeaderProfile = () => {
  return (
    <header className="headerProfile">
      <img 
      className="headerProfile__logoImage"
      src={instagramblack} 
      alt="logo instagram" />
      <div
      className="headerProfile__searchPart"
      >
        <div
        className="headerProfile__searchPart__box"
        >
          <i 
          className="headerProfile__searchPart__box--icon fa-solid fa-magnifying-glass"></i>
          <input 
            className="headerProfile__searchPart__box--input"
          type="text" placeholder="Buscar"></input>
        </div>
        <i 
        className="headerProfile__searchPart__heartIcon fa-regular fa-heart"></i>
      </div>
    </header>
  );
};

export default HeaderProfile;
