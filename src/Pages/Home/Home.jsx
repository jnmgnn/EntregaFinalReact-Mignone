import { useContext, useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Item from '../../Components/Item'
import ItemList from '../../Components/ItemList'
import '../Home/Home.css'
import { FaFilter } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
import { CartCtx } from '../../Context/CartContext'
import { tailspin } from 'ldrs'
tailspin.register()
import React from 'react'
import { getProductList } from "../../DB/Db"


const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { listProducts, setListProducts } = useContext(CartCtx);
    const [filterByCategory, setFilterByCategory] = useState(null)

    const getProducts = async () => {
        setListProducts(await getProductList())
        setIsLoading(false)
    }
    useEffect(() => {
        getProducts();
    }, []);

    if (isLoading) {
        return <div className='loader-container'>
            <l-tailspin className='loader'
                size="72"
                speed="2.6"
                color="crimson"
                stroke="16"
            ></l-tailspin>
        </div>
    }

    return (
        <Layout>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaFilter />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setFilterByCategory(null)} className='FilterItemList'>Todos</Dropdown.Item>
                    {listProducts.map((prod) => (<Dropdown.Item onClick={() => setFilterByCategory(prod.nombre)} className='FilterItemList'>{prod.nombre}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
            <ItemList>
                {listProducts.map((prod) => {
                    if ((filterByCategory != null && filterByCategory == prod.nombre) || !filterByCategory)
                        return (
                            <Item
                                key={prod.id}
                                imgUrl={prod.img}
                                id={prod.id}
                                nombre={prod.nombre}
                                descripcion={prod.descripcion}
                                precio={prod.precio}
                            ></Item>
                        )
                })
                }
            </ItemList>
        </Layout>
    );

}

export default Home