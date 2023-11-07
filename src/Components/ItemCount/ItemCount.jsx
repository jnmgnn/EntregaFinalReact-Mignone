import '../ItemCount/ItemCount.css'
import { useState, useContext } from 'react'
import { CartCtx } from '../../Context/CartContext'


const ItemCount = ({ id, stock, onChange }) => {
    const { cart } = useContext(CartCtx);
    const [quantity, setQuantity] = useState(cart[id] || 0);
    const addRemoveItem = step => {
        let newStock = quantity + step

        if (!(newStock < 0 || newStock > stock)) {
            setQuantity(newStock)
            onChange(newStock)
        }
    }

    return (
        <div className='Counter'>
            <div className='ButtonsTop'>
                <button className='Button' onClick={() => addRemoveItem(-1)}>-</button>
                <p className='Number'>{quantity}</p>
                <button className='Button' onClick={() => addRemoveItem(1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCount

