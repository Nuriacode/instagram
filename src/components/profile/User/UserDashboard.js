import { useEffect, useState } from "react";
import NavProfile from "../NavProfile";
import avatar_user from "../../../images/avatar_user.jpeg";
import "../../../styles/user/UserDashboard.scss";
import getDataPictures from "../../../services/apiImages";

const Dashboard = () => {
  const [dataImages, setDataImages] = useState([]);

    useEffect(() => {
    getDataPictures().then((dataImages) => {
      setDataImages(dataImages);
    });
  }, []);

    const dataPicturesOk = dataImages.map ((eachPicture) => {
      return (
        <li className="dashboard__dataImages__li" key={eachPicture.id}>
          <img className="dashboard__dataImages__li--img"src={eachPicture.url} alt="imagen del feed del usuario"/>
        </li>
      )
    })

  return (
    <>
      <NavProfile />
      <div className="dashboard">
        <div className="dashboard__dataUser">
         <div className="dashboard__dataUser__imgUser">
          <img
          className="dashboard__dataUser__imgUser--img"
          src={avatar_user}
          alt="foto perfil de avatar"
        />
        </div>
        
        <div className="dashboard__dataUser__data">
            <div>
                <h2>Neytiri_avatar</h2>

            </div>
          <div className="dashboard__dataUser__data--followers">
            <h3>413 publicaciones</h3>
            <h3>713 seguidores</h3>
            <h3>713 Seguidores</h3>
            <h3>1171 seguidos</h3>
          </div>
          <h2 className="dashboard__dataUser__data--description">Neytiri</h2>
        </div>
        </div>
       
        <ul className="dashboard__dataImages">
          {dataPicturesOk}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
