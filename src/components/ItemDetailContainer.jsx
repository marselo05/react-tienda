import {useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { productsJson } from "../productsJson";

function ItemDetailContainer()
{
    const [product, setProduct] = useState({});

    const { id } = useParams();
    
    useEffect(() => 
    {
        setTimeout( function() 
        {
            const result = productsJson.filter((item) =>  (item.id === id)  )
            setProduct(result[0]);

        }, 800);
        
    }, [id]);

    return <ItemDetail item={product} />;
    
}

export default ItemDetailContainer;