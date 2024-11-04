import { Link } from 'react-router-dom';
import './PokemonList.css'

const PokemonList = ({pokemon}) => {

    const getTypeClass = (type) => {
        return `type-${type}`;
    }


    return (
            pokemon.map(pokemon => {
                return(
                    <Link to={`/pokemones/${pokemon.id}`} className='link-poke' key={pokemon.id}>
                    <div className='card-container' key={pokemon.id}>
                        <img src={pokemon.img} alt={pokemon.name}  className='card-img'/>
                        <p className='card-id'>#{pokemon.id}</p>
                        <h2 className='card-title'>{pokemon.name}</h2>
                        <div className='types-container'>
                        {pokemon.types.map((type, index) => (
                            <span key={index} className={`poke-type ${getTypeClass(type)}`}>{type}</span>
                        ))}
                        </div>
                        
                    </div>
                    </Link>
                )
            })
    )
}

export default PokemonList