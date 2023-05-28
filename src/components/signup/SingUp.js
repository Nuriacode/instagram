import { Link } from "react-router-dom";
import app_store from "../../images/app_store.png";
import google from "../../images/google.png";
import HeaderLogin from "../login/HeaderLogin";
import "../../styles/signup/Signup.scss";
import Input from "../login/Input";

const SingUp = () => {
  return (
    <>
      <body className="body">
        <div className="body__all">
          <HeaderLogin />
          <h2 className="body__all__text">
            Regsístrate para ver fotos y vídeos de tus amigos.
          </h2>
          <label className="body__all__labelFacebook">
            <i className="body__all__labelFacebook--icon fa-brands fa-square-facebook"></i>
            <h2 className="body__all__labelFacebook--text">
              Iniciar sesión con Facebook
            </h2>
          </label>
          <section className="body__all__sectionOne">
            <Input
              htmlFor={"user"}
              placeholder={"Número de móvil o correo electrónico"}
            />
            <Input htmlFor={"name"} placeholder={"Nombre completo"} />
            <Input htmlFor={"name"} placeholder={"Nombre de usuario"} />
            <Input htmlFor={"name"} placeholder={"Contraseña"} />
            <p className="body__all__sectionOne--text">
              Es posible que los usuarios de nuestro servicio hayan subido tu
              información de contacto en Instagram. Más información.
            </p>
            <p className="body__all__sectionOne--text">
              Al registrarte, aceptas nuestras Condiciones. Obtén más
              información sobre cómo recopilamos, usamos y compartimos tu
              información en la Política de privacidad, así como el uso que
              hacemos de las cookies y tecnologías similares en nuestra Política
              de cookies.
            </p>
            <Link to="/profile">
              <input
                className="body__all__sectionOne--nextStep"
                required
                type="submit"
                name=""
                value="Siguiente"
              />
            </Link>
            <h3 className="body__all__sectionOne--forgottenPassword">
              ¿Has olvidado la contraseña
            </h3>
          </section>
        </div>
        <section className="body__all__sectionTwo">
          <h2 className="body__all__sectionTwo--question">¿Tienes una cuenta?</h2>
          <Link className="body__all--link" to="/">
            Entrar
          </Link>
        </section>
        <h2 className="body__all__text">Descarga la aplicación.</h2>
        <section className="body__sectionThree">
          <Link to="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              className="body__sectionThree--appleImg"
              src={app_store}
              alt="appstore"
            ></img>
          </Link>
          <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DAF23F866-3BC1-494C-B772-BA4F35765715%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1">
            <img
              className="body__sectionThree--googleImg"
              src={google}
              alt="googlestore"
            ></img>
          </Link>
        </section>
      </body>
    </>
  );
};

export default SingUp;
