import {AiOutlineShoppingCart} from 'react-icons/ai'
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return(
        <Badge color='secondary' badgeContent={4}>
            <AiOutlineShoppingCart size={25}/>
        </Badge>
    )
}

export default CartWidget