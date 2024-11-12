import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext.jsx"

const PokemonProvider = ({children}) => {
  const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'
  
  // Estado de los Pokémon
  const [pokemon, setPokemon] = useState([])
  // Número de pokemones por página
  const [dataQt, setDataQt] = useState(20)
  // Página actual
  const [currentPage, setCurrentPage] = useState(1)
  // Índices para la paginación
  const indexFinal = currentPage * dataQt
  const indexIni = indexFinal - dataQt
  // Cálculo de páginas
  const nPage = Math.ceil(1118 / dataQt)
  // Estado de la barra de búsqueda
  const [busqueda, setBusqueda] = useState('')

  // Función para buscar un Pokémon por nombre
  const buscarPoke = async (e) => {
    e.preventDefault()
    if (!busqueda) return

    const pokemon = await busquedaPokemon(busqueda)
    setPokemon([pokemon])
  }

  // Función para obtener Pokémon por ID
  const GetPokemonById = async (id) => {
    const baseUrl = 'https://pokeapi.co/api/v2/'
    const res = await fetch(`${baseUrl}/pokemon/${id}`)
    const data = await res.json()
    return data
  }

  // Función para obtener los datos de un Pokémon
  const fetchPokemon = async (url) => {
    const res = await fetch(url)
    const poke = await res.json()
    return {
      id: poke.id,
      name: poke.name,
      img: poke.sprites.other.dream_world.front_default,
      types: poke.types.map(typeInfo => typeInfo.type.name),
    }
  }

  // UseEffect para obtener la lista de Pokémon con paginación
  useEffect(() => {
    const dataPokemon = async () => {
      const offset = (currentPage - 1) * dataQt
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${dataQt}&offset=${offset}`)
      const listaPokemones = await response.json()
      const { results } = listaPokemones
      const newPokemon = results.map((pokemon) => fetchPokemon(pokemon.url))

      setPokemon(await Promise.all(newPokemon))
    }
    dataPokemon()
  }, [currentPage, dataQt])

  // Función para realizar la búsqueda del Pokémon
  const busquedaPokemon = async (busqueda) => {
    const url = `${URL_ENDPOINT}${busqueda.toLowerCase()}`
    return await fetchPokemon(url)
  }

  // UseEffect para actualizar la lista de Pokémon cuando la búsqueda esté vacía
  useEffect(() => {
    if (!busqueda) {
      // Si la búsqueda está vacía, recargamos los Pokémon de la paginación
      const dataPokemon = async () => {
        const offset = (currentPage - 1) * dataQt
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${dataQt}&offset=${offset}`)
        const listaPokemones = await response.json()
        const { results } = listaPokemones
        const newPokemon = results.map((pokemon) => fetchPokemon(pokemon.url))

        setPokemon(await Promise.all(newPokemon))
      }
      dataPokemon()
    }
  }, [busqueda, currentPage, dataQt])

  return (
    <PokemonContext.Provider value={{
      pokemon,
      setPokemon,
      setCurrentPage,
      currentPage,
      nPage,
      GetPokemonById,
      buscarPoke,
      busquedaPokemon,
      busqueda,
      setBusqueda,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
