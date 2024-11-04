import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext.jsx"


const PokemonProvider = ({children}) => {
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


  const GetPokemonById = async(id) =>{
    const baseUrl = 'https://pokeapi.co/api/v2/'
    const res = await fetch(`${baseUrl}/pokemon/${id}`)
    const data = res.json()
    return data
  }




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
        types: poke.types.map(typeInfo => typeInfo.type.name),
        base_exp: poke.base_experience,
        height: poke.height,
        weight: poke.weight,
        abilities: poke.abilities.map(ability => ability.ability.name),
        stats: poke.stats.map(stat => stat.stat.name),
      }
    })
    
    setPokemon(await Promise.all(newPokemon))
  }
  dataPokemon()
}, [currentPage, dataQt])






  return (
    <PokemonContext.Provider value={{
        pokemon,
        setPokemon,
        setCurrentPage,
        currentPage, 
        nPage,
        GetPokemonById,
        }}>
        {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider