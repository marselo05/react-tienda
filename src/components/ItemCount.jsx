import React, { useState, useEffect } from "react";
import Button from './Button';

function ItemCount({ onAdd, items, stockItem}) 
{
	const [count] 				= useState(1);
	const [stock] 				= useState(stockItem);
	
	useEffect(() => 
	{
	    // console.log("aca soy un componentDidMount");
	    return () => {
	      console.log("esto lo voy a hacer cuando ya no este en el DOM");
	    };

  	}, [count]);

  	const restar = () =>
	{
		if (items <= stock && items > 0) {
			onAdd(items - 1);
		}
	};

  	const sumar = ()  => 
	{
		if (items < stock) 
			onAdd(items + 1);
	};
	
	return (
		<>
			<div className="cont-agregar-carrito">
				<div className="agregar-carrito">
					<Button text="-" eventoClick={ restar } />
					<input type="number" value={ items } disabled />
					<Button text="+" eventoClick={ sumar } />
				</div>
			</div>
		</>
	);
}

export default ItemCount;