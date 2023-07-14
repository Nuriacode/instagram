import "../../styles/profile/navProfile.scss";
import avatar_user from "../../images/avatar_user.jpeg";
import instagramblack from "../../images/instagramblack.png";

const NavProfile = () => {
  return (
    <nav className="nav">
      <div className="nav__div0">
        <i className="nav__div0--icon0 fa-brands fa-instagram" />
        <img
          className="nav__div0--logoInsta"
          src={instagramblack}
          alt="logo instagram"
        />
      </div>

      <div className="nav__div1">
        <i className="nav__div1--icon1 fa-solid fa-house" />
        <p className="nav__div1--text">Inicio</p>
      </div>

      <div className="nav__div2">
        <i className="nav__div2--icon2 fa-solid fa-magnifying-glass" />
        <p className="nav__div2--text">Búsqueda</p>
      </div>

      <div className="nav__div1">
        <i className="nav__div1 fa-regular fa-compass" />
        <p className="nav__div1--text">Explorar</p>
      </div>

      <div className="nav__div1">
        <i className="nav__div1--icon1 fa-solid fa-film" />
        <p className="nav__div1--text">Reels</p>
      </div>

      <div lassName="nav__div1">
        <i className="nav__div1--icon1 fa-regular fa-square-plus" />
        <p className="nav__div1--text">Crear</p>
      </div>

      <i className="nav__icon6 fa-regular fa-paper-plane"></i>
      <i className="nav__icon7 fa-regular fa-heart"></i>
      <img className="nav__avatarImage" src={avatar_user} alt="foto avatar" />

      <i className="nav__icon8 fa-solid fa-bars"></i>
    </nav>
  );
};

export default NavProfile;
