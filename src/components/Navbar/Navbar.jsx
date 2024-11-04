import Pokedex from '../../assets/icons8-pokedex-64.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <header className='container-navbar'>
        <div className='icon-container'>
          <Link to={'/'}>
            <img src={Pokedex} alt='pokedex' className='icon-svg' />
          </Link>
        </div>
    
    </header>
  )
}

export default Navbar