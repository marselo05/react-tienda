import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemList from './ItemList';
import { productsJson } from "../productsJson";

function ItemListContainer (props) 
{
	const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
	const [loading, setLoading] = useState(false);

	useEffect(() => 
    {
		setLoading(true);
        setTimeout( function() 
        {
			if (!categoryId) {
				setProducts(productsJson);
			}
			else{
				const result = productsJson.filter((item) =>  (item.categoryId === categoryId)  )
            	setProducts(result);
			}
		
			setLoading(false);
        }, 800);
        
    }, [categoryId]);

	if( loading )
		return <h1>Loading...</h1>;
	
	return (
		<ItemList products={products}/>
	); 

}

export default ItemListContainer;