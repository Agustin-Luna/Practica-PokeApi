import React, { useContext} from 'react'
import Pagination from '../Pagination/Pagination'
import './StilesPokeApi.css'
import Card from '../PokemonList/PokemonList'
import { PokemonContext } from '../../contex/PokemonContext.jsx'



const FetchPokeApi = () => {
  const {pokemon, setCurrentPage, nPage, currentPage} = useContext(PokemonContext)

  return (
    <>
      <div className='div-container'>
        <Card pokemon={pokemon} />
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPage={nPage}/>
    </>
  )
}

export default FetchPokeApi