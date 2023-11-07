import {BsCart} from 'react-icons/bs'
import { Badge } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import {CartCtx} from '../Context/CartContext'

const CartWidget = () => {
    const {cart} = useContext(CartCtx)
    const [cartData, setCartData] = useState(cart)
    useEffect(() => {setCartData(cart)}, [cart])

    return (
        <Badge color='secondary' badgeContent={Object.values(cartData).reduce((n,acc)=>n+acc, 0)} >
            <BsCart size={25} />
        </Badge>
    )
}

export default CartWidget