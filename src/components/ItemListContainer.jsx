import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemList from './ItemList';
import { productsJson } from "../productsJson";

function ItemListContainer (props) 
{
	const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

	useEffect(() => 
    {

        setTimeout( function() 
        {
			if (!categoryId) {
				setProducts(productsJson);
			}
			else{
				const result = productsJson.filter((item) =>  (item.categoryId === categoryId)  )
            	setProducts(result);
			}
            	

        }, 800);
        
    }, [categoryId]);

	
	return (
		<ItemList products={products}/>
	); 

}

export default ItemListContainer;