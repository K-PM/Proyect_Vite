import '../assets/style/nav.css';
import "../components/Footer"
import title from '../assets/img/titulo_tokyo.png';


function Nav() {
    return ( 
         <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#personajes">Personajes</a></li>
            <li><a href="#temporadas">Temporadas</a></li>
          </ul> 
          <img src={title}></img>
        </nav>

        
     );
}
export default Nav;