import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from '../../Pages/ItemDetail/ItemDetail'
import { db } from '../../DB/Db'
import { doc, getDoc } from 'firebase/firestore'
import CartContext from '../../Context/CartContext';


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    const productRef = doc(db, "productos", idProduct);

    getDocs(productRef).then((response) => {
      if (response.exists()) {
        const productData = { id: response.id, ...response.data()};
        setProduct(productData);
        setLoading(false);
      } else {
        console.log("El producto no existe en la base de datos")
      }
    });
  }, [idProduct]);

  return (
    <div id="item-detail-container">
      {loading ? <div>Cargando...</div> : <ItemDetail product={product} />}
    </div>
  )
}

export default ItemDetailContainer