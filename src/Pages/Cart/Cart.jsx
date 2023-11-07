import React, { useContext } from 'react';
import { CartCtx } from '../../Context/CartContext';
import Layout from '../../Components/Layout';

import { Link } from 'react-router-dom'
import '../Cart/Cart.css'

const Cart = () => {
  const order = {
    buyer: { name: "juan", phone: "7489127", email: "juanperez@gmail.com" },
    items: [{ id: 3, name: "Kuromi", price: 290 }],
    total: 290,
  };

  const { cart, listProducts, setListProducts, clearCart } = useContext(CartCtx);


  if (!listProducts) {
    const getProducts = async () => {
      setListProducts(await getProductList())
      setIsLoading(false)
    }

    useEffect(() => {
      getProducts();
    }, []);
  }

  const getItem = (id) => {
    return listProducts.find((item) => item.id === id);
  }


  return (
    <Layout>
      {
        !Object.values(cart)?.length ?
          (
            <>
            <h1>No tienes productos en tu carrito</h1>
          </>
        ) : (
          <>
            {Object.keys(cart).map((key) => {
              const item = getItem(key);
              const precioTotal = item.precio * cart[key];
              return (
                <div className='cart-item' key={key}>
                  <img src={item.img} />
                  <h3>
                    {item.nombre} x{cart[key]} <span className='precio-cantidad'>{item.precio}</span>
                  </h3>
                  <p>Precio Total: ${precioTotal}</p>
                </div>
              );
            })}
            <div className='precio-total-final'>
              <p>Precio Final: ${Object.keys(cart).reduce((total, key) => {
                const item = getItem(key);
                const precioTotalFinal = item.precio * cart[key];
                return total + precioTotalFinal;
              }, 0)}</p>
            </div>
          </>
            )
          }

      <Link hidden={!Object.values(cart)?.length} to={"/checkout"} className='finish-button'>Finalizar Compra</Link>
      <button hidden={!Object.values(cart)?.length} onClick={clearCart}>Borrar Carrito</button>
    </Layout>
  );
};

export default Cart;
