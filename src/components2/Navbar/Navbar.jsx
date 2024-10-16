import Pokedex from '../../assets/icons8-pokedex-64.png'
import './Navbar.css'
import Search from '../Search/Search.jsx'


const Navbar = ({pokemon}) => {

  return (
    <header className='container-navbar'>
        <div className='icon-container'>
            <img src={Pokedex} alt='pokedex' />
        </div>
    
    </header>
  )
}

export default Navbar