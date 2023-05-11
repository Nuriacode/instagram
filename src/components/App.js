/* SECCIÓN DE IMPORT */
import { Routes, Route } from "react-router-dom";
// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
import LoginPage from "./login/LoginPage";
import ProfilePage from "./profile/ProfilePage";
import SingUp from "./signup/SingUp";
// - Imágenes


/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App">{
    <Routes>
        <Route
        path="/" 
        element={<LoginPage className='login'/>} />
        <Route
        path="/profile" 
        element={<ProfilePage className='profile'/>} />
        <Route
        path="/signup" 
        element={<SingUp className='singup'/>} />
      </Routes>
    }</div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
