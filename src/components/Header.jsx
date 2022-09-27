import '../assets/style/header.css'
import Nav from "../components/Nav";
import fondo from '../assets/img/posiblecopy2.jpg'

function Header() {
  return (
    <header>
      <Nav></Nav>
        <img src={fondo} id='inicio'></img>
    </header>
    
  );
}
export default Header;
