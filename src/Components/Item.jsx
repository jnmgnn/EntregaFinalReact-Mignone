import { width, height } from "@mui/system"
import { Link } from 'react-router-dom'
import ItemCount from "./ItemCount/ItemCount";
import '../Components/Item.css'

const Item = ({id, nombre, precio, descripcion, imgUrl}) => {

    return (
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <picture>
          <img src={imgUrl} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
          <p className="Precio">${precio}</p>
        </section>
        <footer className="ItemFooter">
          <Link to={`/product/${id}`} className="Info">Ver Detalle</Link>
        </footer>
      </article>
    )
}

export default Item