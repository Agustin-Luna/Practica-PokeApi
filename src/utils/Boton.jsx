import './Boton.css'

const Boton = ({ children, className = "", onClick }) => {

    return (
        <button
        onClick={onClick}
        className={`boton ${className}`}>
        {children}
    </button>
    );
};

export default Boton;