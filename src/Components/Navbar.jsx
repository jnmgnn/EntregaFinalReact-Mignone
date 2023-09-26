import CartWidget from "../Components/CartWidget";
import ItemListContainer from "../Components/ItemListContainer";
import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navegacion = ['Home', 'Tienda', 'Contacto', 'Ayuda']

  const handleConsole = () => console.log('Aca estoy')

  return (
    <div className="navbar">
      <Link to="/" className="navbarItem">Home</Link>
      <Link to="/contacto" className="navbarItem">Contacto</Link>
      <Link to="/ayuda" className="navbarItem">Ayuda</Link>
      <Link to="/novedades" className="navbarItem">Novedades</Link>
      <CartWidget />
    </div>
  );
};

export default Navbar;