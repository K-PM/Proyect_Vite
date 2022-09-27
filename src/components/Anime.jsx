import '../assets/style/anime.css'
import Card from './Card'

function Anime(){
    
    const animes =[
        {
            id:1,
            name: "Naruto",
        },
        {
            id:2,
            name: "Dragon ballz",
        },
        {
            id:3,
            name: "Boku no hero",
        },
        {
            id:4,
            name: "Boruto",
        },
    ];

    return (
        <div className='container'>
            <h2>Animes sugeridos</h2>
            {animes.map((anime)=> {
                return (
                    <div className='animes'> 
                        <Card 
                            key={anime.id}
                            name={anime.name}
                        />
                    </div>
                    
                )
            })}
        </div>
    );
  }
export default Anime;
