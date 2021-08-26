import {useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { productsJson } from "../productsJson";

function ItemDetailContainer()
{
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    
    useEffect(() => 
    {
        setLoading(true);
        setTimeout( function() 
        {
            const result = productsJson.filter((item) =>  (item.id === id)  )
            setProduct(result[0]);
            setLoading(false);
        }, 800);
        
    }, [id]);

    if (loading) 
        return <h1>Loading...</h1>;
      
    return <ItemDetail item={product} />;
    
}

export default ItemDetailContainer;