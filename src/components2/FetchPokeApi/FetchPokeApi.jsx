import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination'
import './StilesPokeApi.css'


const FetchPokeApi = () => {
    // llamado inicial
    const [pokemon, setPokemon] = useState([])
    // numero de pokemones por pag
    const [dataQt, setDataQt] = useState(20)
    // numero de paginas
    const [currentPage, setCurrentPage] = useState(1)


    //paginacion
    const indexFinal = currentPage * dataQt
    const indexIni = indexFinal - dataQt
    //Se ajusta el cálculo de nPage utilizando el número total de pokémon disponible en la API
    const nPage = Math.ceil(1118 / dataQt)

useEffect(()  => {
  const dataPokemon = async () => {
    // paginacion
    const offset = (currentPage - 1) * dataQt
    //llamado 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${dataQt}&offset=${offset}`)
    const listaPokemones = await response.json()
    const {results} = listaPokemones
    
    const newPokemon = results.map( async(pokemon) => {
      const res = await fetch(pokemon.url)
      const poke = await res.json()
      return {
        id: poke.id,
        name: poke.name,
        img: poke.sprites.other.dream_world.front_default,
      }
    })
    setPokemon(await Promise.all(newPokemon))
  }
  dataPokemon()

}, [currentPage, dataQt])


  return (
    <>
      <h1 className='title-page'>pokedex</h1>
      <div className='div-container'>

      {pokemon.map(pokemon => {
        return(
            <div className='card-container' key={pokemon.id}>
              <img src={pokemon.img} alt={pokemon.name}  className='card-img'/>
              <h2 className='card-title'>{pokemon.name}</h2>
              <p className='card-id'>#{pokemon.id}</p>
            </div>
        )
      })
      }
      </div>
      <Pagination 
      setCurrentPage={setCurrentPage} 
      currentPage={currentPage} 
      nPage={nPage}/>
    </>
  )
}

export default FetchPokeApi