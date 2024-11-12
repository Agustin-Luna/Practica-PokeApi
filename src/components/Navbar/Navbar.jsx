import Pokedex from '../../assets/icons8-pokedex-64.png'
import Barra from '../BarraBusqueda/Barra'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

  return (
    <header className='container-navbar'>
        <div className='icon-container'>
          <Link to={'/'}>
            <img src={Pokedex} alt='pokedex' className='icon-svg' />
          </Link>
        </div>
    <Barra/>
    </header>
  )
}

export default Navbar