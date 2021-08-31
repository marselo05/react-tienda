import React, { useState } from "react";
import Button from './Button';
// import { Link } from "react-router-dom";

function ItemCount({ stock, onAdd }) 
{
	const [count, setCount] 		= useState(1);
	// const [stock] 				= useState(stockItem);
	
	// useEffect(() => {
	    // console.log("aca soy un componentDidMount");
		// onAdd(count)
  	// }, []);

  	const restar = () =>
	{
		if (count > 0) 
			setCount(count - 1)
		
	};

  	const sumar = ()  => 
	{
		if ( count < stock) 
			setCount(count + 1);
		
	};
	
	return (
		<>
			<div className="cont-agregar-carrito">
				<div className="agregar-carrito">
					<Button text="-" eventoClick={ restar } />
					<input type="number" value={ count } disabled />
					<Button text="+" eventoClick={ sumar }  />
				</div>
			</div>
			{/* {count > 0 && <Link to={'/cart'}> terminar compra</Link>} */}
		</>
	);
}

export default ItemCount;