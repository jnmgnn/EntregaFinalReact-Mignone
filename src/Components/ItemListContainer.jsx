/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import "./ItemListContainer.css";
import { productos } from '../products'
import Button from '@mui/material/Button';
import ItemList from '../Components/ItemList'

const ItemListContainer = ({router, handleConsole}) => {
    return (
        <div className="container">
            {router.map((ruta) => (
                <a key={ruta}>{ruta}</a>
            ))}
        </div>
    )
}

export default ItemListContainer;