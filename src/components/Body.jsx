import '../assets/style/body.css';
import general from '../assets/img/general.jpg';

import kaneki from '../assets/img/kaneki.png';
import touka from '../assets/img/touka.png';
import rize from '../assets/img/rize.png';
import nishio from '../assets/img/nishio.png';
import shuu from '../assets/img/shuu.png';
import okotaro from '../assets/img/okotaro amon.png';
import hide from '../assets/img/hide.png';
import juu from '../assets/img/juuzou.png';
import arima from '../assets/img/arima.png';

import temp1 from '../assets/img/temp1.jpg';
import temp2 from '../assets/img/tem2.webp';
import temp3 from '../assets/img/temp3.jpg';

import Anime from "../components/Anime";

function Body() {
 
    return (
        <body>
            <div className='columns'>
                <div >
                   <img src={general} ></img>
                </div>
                <div>
                    <p>En Tokio hay varias muertes, cometidas por Ghouls,
                        seres desconocidos que sobreviven a base de carne humana. <br />
                        Kaneki termina convirtiéndose en un ser mitad Ghoul y mitad 
                        Humano, de ahora en adelante deberá vivir escondiéndose de <br />
                        los humanos sin tener a quién recurrir. Conoce a unos Ghouls 
                        que trabajan en una cafetería, el café es el único gusto que <br />
                        comparten los Ghouls y los humanos. Durante el transcurso de la 
                        historia Kaneki conocerá a nuevos compañeros y verá el lado <br />
                        oscuro de tanto la humanidad como de los Ghouls. 
                    </p>
              </div>
            </div>
            <div>
                <h3 id='personajes'>Personajes</h3>
                <div className='columns2'>
                    <div className='columns3'>
                        <div><img src={kaneki} ></img><p> KenKaneki</p> </div>
                        <div><img src={nishio} ></img><p>Nishio Fishio</p></div>
                        <div><img src={hide} ></img><p>Hideyoshi Nagachika</p></div>
                    </div>
                    <div className='columns3'>
                        <div><img src={touka} ></img><p>Touka Kirishima</p></div>
                        <div><img src={shuu} ></img><p>Shuu Tsukiyama</p></div>
                        <div><img src={juu} ></img><p>Juuzou Suzuya</p></div>
                    </div>
                    <div className='columns3'>
                        <div><img src={rize} ></img><p>Rize Kamishiro</p></div>
                        <div><img src={okotaro} ></img><p>〇Kōtarō Amon 〇</p></div>
                        <div><img src={arima} ></img><p>Arima Kishou</p></div>
                    </div>
                </div>
                <div id='temporadas'>
                    <h3>Temporadas</h3>
                    <img className='temp' src={temp1}></img> 
                    <p className='temporada'><br /> Tokyo Ghoul <br /> <br />
                    Episodios: 12 <br />Emision:2014 <br /> [ 3 julio / 19 septiembre ]</p>
                    <img className='temp' src={temp2} ></img>
                    <p className='temporada'> Tokyo Ghoul:  re  <br />  <br />Episodios: 12 <br />
                    Emision: 2015 <br />[ 8 enero / 26 marzo ] </p>
                    <img className='temp' src={temp3 } ></img>
                    <p className='temporada'>Tokyo Ghoul  √A  <br />  <br />Episodios: 12 <br />
                    Emision: 2018 <br /> [ 3 abril  / 25diciembre  ] </p>
                </div>
            </div>
            <Anime></Anime>
        </body>
    );
  }
  export default Body;
