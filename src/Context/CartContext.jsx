import { createContext, useState } from "react"
export const CartCtx = createContext()

const CartContext = ({children}) => {
    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState({})
    const modifyCart = (idProduct, newStock) => {
        let tempCart = cart; 
        tempCart[idProduct] = newStock; 
        setCart(tempCart)
    }

    const clearCart = () => {
        setCart({});
    }

    return (
        <CartCtx.Provider value={{cart, modifyCart, listProducts, setListProducts, clearCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartContext