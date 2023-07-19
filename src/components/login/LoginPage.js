import { Link } from "react-router-dom";
import app_store from "../../images/app_store.png";
import google from "../../images/google.png"
import HeaderLogin from "./HeaderLogin";
import "../../styles/LoginPage.scss";
import Input from "./Input";


const LoginPage = () => {
  return (
    <>
     <div className="allSections" >
      <div className="allSections__imagePhones">
        <div className="allSections__imagePhones--img"></div>
      </div>
      <body className="body">
        <div className="all">
          <HeaderLogin />
          <form className="body__sectionOne">
            <Input
              htmlFor={"user"}
              placeholder={"Teléfono, usuario o correo electrónico"}
              text={"X"}
            />
            <Input htmlFor={"password"} placeholder={"Contraseña"} />
            <Link to="/profile">
              <input
                className="body__sectionOne__inputSubmit"
                required
                type="submit"
                name=""
                value="Entrar"
              />
            </Link>
            <div className="body__sectionOne__facebook">
              <i className="body__sectionOne__facebook--icon fa-brands fa-square-facebook"></i>
              <h2 className="body__sectionOne__facebook--text">
                Iniciar sesión con Facebook
              </h2>
            </div>
            <h3 className="body__sectionOne__forgottenPassword">
              ¿Has olvidado la contraseña
            </h3>
          </form>
        </div>
        <section className="body__sectionTwo">
          <h2 className="body__sectionTwo--question">¿No tienes una cuenta?</h2>
          <Link className="body__sectionTwo--link" to="/signup">
            Regístrate
          </Link>
        </section>
        <h2 className="body__text">Descarga la aplicación.</h2>
        <section className="body__sectionThree">
          <Link 
          to="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img 
            className="body__sectionThree--appleImg"
            src={app_store} alt="appstore"></img>
          </Link>
          <Link 
          to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DAF23F866-3BC1-494C-B772-BA4F35765715%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1">
            <img 
            className="body__sectionThree--googleImg"
            src={google} alt="googlestore"></img>
          </Link>
        </section>
        <h2>Creado por Nuria Castaño</h2>
        <p>Clone visual con fines de investigación y aprendizaje</p>
      </body>
      
      </div>
    </>
  );
};

export default LoginPage;
