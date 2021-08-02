import React, { useState, useEffect } from "react";
import Button from './Button';

function ItemCount(props) 
{
	const [count, setCount] 	= useState(Number(props.initial));
	const [stock] 				= useState(props.stock);

	useEffect(() => 
	{
	    // console.log("aca soy un componentDidMount");
	    return () => {
	      console.log("esto lo voy a hacer cuando ya no este en el DOM");
	    };

  	}, [count]);

  	function restar(count) {
  		return () => {
  			if (count>1) 
  				setCount(count - 1)
  		};
  	} 

  	function sumar(count) {
  		return () => {
  			(count < stock ) ? onAdd() : console.log('Limite de stock');
  		};
  	} 

  	function onAdd() {
  		return setCount(count + 1);
  	}
	
  	function handleSubmit(e) {
	    e.preventDefault();
	    console.log('You clicked submit.');
	}

	return (
		<React.Fragment>
			<div className="cont-agregar-carrito">
			<form onSubmit={handleSubmit} className="agregar-carrito">
				<div>
					<Button text="-" eventoClick={ restar(count) } />
					<input type="number" value={ count } disabled />
					<Button text="+" eventoClick={ sumar(count) } />
				</div>
				<button className="button-submit" type="submit">Agregar al carrito</button>
			</form>
			</div>
		</React.Fragment>
	);
}

export default ItemCount;