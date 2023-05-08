/* SECCIÓN DE IMPORT */

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';
// - Imágenes
import instagramblack from "../imges/instagramblack.png"

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */

  /* EFECTOS (código cuando carga la página) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App">{
    /* Aquí va el HTML */
    <>
    <header>
      <img className="header__img"
      src={instagramblack}
      alt="logo instagram"/>
    </header>
    <body>
      <input type="text"/>
    </body>
    </>
    }</div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
