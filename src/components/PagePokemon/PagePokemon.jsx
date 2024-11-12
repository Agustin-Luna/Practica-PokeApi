import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../contex/PokemonContext.jsx'
import './PagePoke.css'
import { useParams } from 'react-router-dom'



const PagePokemon = () => {

  const {pokemon, GetPokemonById} = useContext(PokemonContext)

  const [poke, setPoke] = useState({})

  const {id} = useParams()


  
  const FetchPoke = async (id) =>{
    const data = await GetPokemonById(id)
    setPoke(data)
  }


  useEffect(() => {
    FetchPoke(id)
  }, [])
  

// Función para obtener la clase de tipo
  const getTypeClass = (type) => {
  return `type-${type}`;
};


  return (
    <main>
      {
        <div className='container-page-poke'>
        
        <div className='box-1'>
          <div className='div-name'>
            <span className='id-poke'>#{poke.id}</span>
            <h1 className='name-poke'>{poke.name}</h1>
          </div>
          <div className='container-info'>

          <div className='container-types-card' key={poke.name}>
            {poke.types?.map(type => (
              <span className={`poke-type ${getTypeClass(type.type.name)}`}>
              {type.type.name}
            </span>
            ))}
          </div>
        
          <div className='container-peso-altura'>
            <div className='box-height'>
              <h3 className='height-title'>Altura</h3>
            <p className='heigth'>{poke.height} mts</p>
            </div>

            <div className='box-weight'>
              <h3 className='weight-title'>Peso</h3>
              <p className='weight'>{poke.weight}kg</p>
            </div>
          </div>
        </div>
          </div>

        <div className='box-2'>
          <img className='img-poke-page' src={poke.sprites?.other?.dream_world?.front_default} alt={poke.name} />
        </div>

            <div className='box-3'>  
            <h2 className='stat-title'>ESTADISTICAS</h2>
            
            <div className='stats'>
              <h4 className='title-stats'>HP</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[0]?.base_stat}</span>
            </div>
            
            <div className='stats'>
              <h4 className='title-stats'>Atack</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[1].base_stat}</span>
            </div>
            
            <div className='stats'>
              <h4 className='title-stats'>Defense</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[2].base_stat}</span>
            </div>
            
            <div className='stats'>
              <h4 className='title-stats'>Special-Attack</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[3].base_stat}</span>
            </div>
            
            <div className='stats'>
              <h4 className='title-stats'>Special-Defense</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[4].base_stat}</span>
            </div>

            <div className='stats'>
              <h4 className='title-stats'>Speed</h4>
              <div className="barra-progreso"></div>
              <span className='stat-span'>{poke.stats?.[5].base_stat}</span>
            </div>


            </div>
        </div>
      }
    </main>
  )
}

export default PagePokemon