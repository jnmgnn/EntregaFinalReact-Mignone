import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productos } from "../../products";
import Layout from "../../components/Layout/";
import '../ItemDetail/ItemDetail.css'
import { AiOutlineArrowLeft} from 'react-icons/ai'

const ItemDetail = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const searchProduct = productos.find(
    (prod) => prod.id === parseInt(idProduct)
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchProduct);
      setProduct(searchProduct);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <p>Cargando . .</p>
      ) : (
        <>
        <div className="DetailItem">
          <h1 className="ItemDetailTitle">{product.nombre}</h1> <br />
          <p className="ItemDetailPrecio">{product.precio}</p>
          <img src={product.img} alt={product.nombre} />
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
