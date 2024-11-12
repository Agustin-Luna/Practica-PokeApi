import { useContext, useState } from 'react'
import Boton from '../../utils/Boton.jsx'
import { PokemonContext } from '../../contex/PokemonContext.jsx'
import './Barra.css'

const Barra = () => {


  const {buscarPoke, busquedaPokemon, busqueda, setBusqueda} = useContext(PokemonContext)





  return (
    <div className='container-input' > 

      <form onSubmit={buscarPoke} className='form'>
        <input 
        className='input-poke'
        type="search"
        name='valueSearch'
        id=''
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar pokemon'
        />
        <Boton type='submit'>Buscar</Boton>
      </form>


    </div> 
  )
}

export default Barra