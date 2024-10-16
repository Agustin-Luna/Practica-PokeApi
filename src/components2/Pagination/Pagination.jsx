import Boton from '../../utils/Boton'
import './Pagination.css'

const Pagination = ({nPage, setCurrentPage,currentPage}) => {
  
  const next = () => {
    if(currentPage !== nPage) setCurrentPage(currentPage +1)
  }

  const prev = () => {
    if(currentPage !== 1) setCurrentPage(currentPage -1)
  }
  
  return (
    <div className='page-container'>
      <Boton onClick={prev} >Anterior</Boton>
      <h3>{currentPage} / {nPage}</h3>
      <Boton onClick={next}>Siguiente</Boton>
    </div>
  )
}

export default Pagination