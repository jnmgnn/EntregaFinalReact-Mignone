import CartWidget from "../Components/CartWidget";
import "./Navbar.css";
import { Link } from 'react-router-dom'


const Navbar = () => {
  

  return (
    <div className="navbar">
      <Link to="/" className="navbarItem">Home</Link>
      <Link to="/contacto" className="navbarItem">Contacto</Link>
      <Link to="/ayuda" className="navbarItem">Ayuda</Link>
      <Link to="/novedades" className="navbarItem">Novedades</Link>
      <Link to={'/cart'}>
      <CartWidget />
      </Link>
      
    </div>
  );
};

export default Navbar;