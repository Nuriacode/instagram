import instagramblack from "../../images/instagramblack.png";
import "../../styles/profile/headerProfile.scss";

const HeaderProfile = () => {
  return (
    <header className="header">
      <img 
      className="header__logoImage"
      src={instagramblack} 
      alt="logo instagram" />
      <div
      className="header__searchPart"
      >
        <div
        className="header__searchPart__box"
        >
          <i 
          className="header__searchPart__box--icon fa-solid fa-magnifying-glass"></i>
          <input 
            className="header__searchPart__box--input"
          type="text" placeholder="Buscar"></input>
        </div>
        <i 
        className="header__searchPart__heartIcon fa-regular fa-heart"></i>
      </div>
    </header>
  );
};

export default HeaderProfile;
