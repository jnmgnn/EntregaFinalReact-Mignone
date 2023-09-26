import { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Item from '../../Components/Item'
import { productos } from '../../products'
import ItemList from '../../Components/ItemList'
import '../Home/Home.css'
import { FaFilter } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [filterByCategory, setFilterByCategory] = useState(null)

    useEffect(()=> {
        setTimeout(()=> {
            setProducts(productos);
            setIsLoading(false)
        }, 1000)
    }, [])
    return (
        <Layout>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaFilter />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilterByCategory(null)} className='FilterItemList'>Todos</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Hello Kitty')} className='FilterItemList'>Hello Kitty</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Cinnamoroll')} className='FilterItemList'>Cinnamoroll</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Kuromi')} className='FilterItemList'>Kuromi</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('My Melody')} className='FilterItemList'>My Melody</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Pompompurin')} className='FilterItemList'>Pompompurin</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Pochacco')} className='FilterItemList'>Pochacco</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Badtz-maru')} className='FilterItemList'>Badtz-maru</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterByCategory('Keroppi')} className='FilterItemList'>Keroppi</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <ItemList>
                { isLoading ? (
                <div>Cargando...</div> 
                ) : products && !filterByCategory ? (
                products.map((prod) => (
                        <Item 
                        key={prod.id}
                        imgUrl={prod.img}
                        id={prod.id}
                        nombre={prod.nombre}
                        descripcion={prod.descripcion}
                        precio={prod.precio}
                        ></Item>
                    ))
                ) : (
                    products
                    ?.filter((prod) => prod.categoria === filterByCategory)
                    .map((prod) => (
                        <Item 
                        key={prod.id}
                        imgUrl={prod.img}
                        id={prod.id}
                        nombre={prod.nombre}
                        descripcion={prod.descripcion}
                        precio={prod.precio}
                        ></Item>
                    ))
                    )}
            </ItemList>
        </Layout>
    );
    
}

export default Home