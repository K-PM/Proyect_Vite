import '../assets/style/footer.css'

import facebook from '../assets/img/iconFace.png';
import Up from '../assets/img/Up.png';

function Footer() {
    return (
        <footer>
                <a href="https://www.facebook.com/kristell.11/"> <img src={facebook} ></img></a> 
                <a href="https://www.upchiapas.edu.mx"><img src={Up} ></img></a>
                <p>Kristell PM | UP</p>          
        </footer>
      );
}

export default Footer;