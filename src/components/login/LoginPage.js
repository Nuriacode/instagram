import { Link } from 'react-router-dom';
import HeaderLogin from './HeaderLogin';
import "../../styles/LoginPage.scss"
import Input from './Input';


const LoginPage = () => {
    return (
        <>
        <div className='all'>
    <HeaderLogin/>
    <body className='body'>
      <section
      className='body__sectionOne'>
        <Input/>
      <input
      className='sectionOne__inputText' 
      required
      type="text"
      name=""
      value=""
      placeholder="Contraseña"/>
      <Link to="/profile">
      <input 
      className='sectionOne__inputSubmit'
      required
      type="submit"
      name=""
      value="Entrar"
      />
      </Link>
      <h2>Iniciar sesión con Facebook</h2>
      <h3>¿Has olvidado la contraseña</h3>
      </section>
      <section className='body__sectionTwo'>
        <h2>¿No tienes una cuenta?</h2>
        <h2>
          <Link to="/signup">Regístrate</Link>
        </h2>
      </section>
    </body>
    </div>
    
    </>
    )
}

export default LoginPage;