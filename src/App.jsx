import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FetchPokeApi from './components/FetchPokeApi/FetchPokeApi.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import PagePokemon from './components/PagePokemon/PagePokemon.jsx';
import PokemonProvider from './contex/PokemonProvider.jsx';



function App() {

  return (
    <PokemonProvider>

      <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route path='/' element={<FetchPokeApi/>}/>
          <Route path='/pokemones/:id' element={<PagePokemon/>}/>
        </Routes>

      </BrowserRouter>

    </PokemonProvider>


  )
}

export default App;
