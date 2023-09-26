import { useState } from "react"

export const useCount = (idProducto) =>  {
    const [count, setCount] = useState(1)
    const increment = () => {
        if(count <= 9) setCount (count + 1)
    }
    const decrement = () => {
        if(count >= 1) setCount (count - 1)
    }
    return {count, increment, decrement}
}