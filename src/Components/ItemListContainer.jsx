import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../DB/Db";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "productos");
        const categoryQuery = idCategory && query(productsRef, where("category", "==", idCategory))
        const queryRef = idCategory ? categoryQuery : productsRef

        getDocs (queryRef).then((response) => {
        const productsData = response.docs.map((productDoc) => ({
        id: productDoc.id, ...productDoc.data(),
}));
    setProducts(...productsData);
    setLoading(false);
})}, [idCategory]);

return (
<div id="item-list-container"> 
{loading ? <div>Cargando...</div> : <ItemList products={products} />} </div>
);
};

export default ItemListContainer
