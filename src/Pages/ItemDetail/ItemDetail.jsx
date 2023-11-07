import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout/";
import '../ItemDetail/ItemDetail.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import ItemCount from '../../Components/ItemCount/ItemCount'
import {CartCtx} from '../../Context/CartContext';
import { getProductData } from "../../DB/Db"


const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0)

  const getProduct = async () => {
    setProduct(await getProductData(idProduct))
    setIsLoading(false)
}
useEffect(() => {
    getProduct();
}, []);

  const { modifyCart, cart } = useContext(CartCtx);


  return (
    <Layout>
      {isLoading ? (
        <p>Cargando ...</p>
      ) : (
        <>
        <div className="DetailItem">
          <img src={product.img} alt={product.nombre} />
          <h1 className="ItemDetailTitle">{product.nombre}</h1>
          <p className="ItemDetailPrecio">{product.precio}</p>
          <button onClick={() => modifyCart(product.id, totalQuantity)}>{cart[product.id] > 0 ? 'Actualizar el' : "Añadir al"} carrito</button>
          <ItemCount onChange= {quantity => {setTotalQuantity(quantity)}} id={product.id} stock={product.stock}/>
        </div>
        <div className="DetailItem">
          <div className="ItemDesc">
          <h2>¡Conoce a {product.nombre}!</h2>
          <div>{product.descripcion}</div>
          </div>
        </div>
          <h3>
            <Link to={"/"}><AiOutlineArrowLeft /> </Link>
          </h3>
        </>
      )}
    </Layout>
  );
};

export default ItemDetail;
