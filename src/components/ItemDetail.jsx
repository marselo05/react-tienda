// import { Link } from "react-router-dom";
import {  useContext } from "react";
import ItemCount from "./ItemCount";
import CartContext  from "../context/cartContext";


function ItemDetail( { item } ) 
{
    // const [item, setItems] = useState(0)
    const {addToCart, carrito, setCarrito} = useContext(CartContext);
    const agregar = (qty) => {addToCart(item, qty)}
    
    console.log(item)

    const agregarCarrito = (it, st) => 
    {
        
        const carritoItemAdd = [...carrito];
        carritoItemAdd.push(it);
        setCarrito(carritoItemAdd);

        console.log(carritoItemAdd)

    }

    const removeItemCarrito = (id) => 
    {
        
        var listRemove = [...carrito];
        
        listRemove.splice(id, 1); 
        listRemove = setCarrito(listRemove)

        console.log(carrito)
    }

    const clearCarrito = () => {
        
        setCarrito([]);
        
    }

    return (
        <>
			<p>{item.title} ss</p>
			<p>{item.price}</p>
			<p>{item.pictureUrl}</p>
			<p>{item.descripcion}</p>
            {/* <button onClick={onAdd} item={item}>Terminar tu compra</button> */}
            <ItemCount stock={item.stock}  onAdd={agregar}  />
            <button onClick={ () => { agregarCarrito(item, item.stock) } }>Agregar al carrito</button>
            {/* <button onClick={ () => { removeItemCarrito(1) } }>Eliminar del carrito</button> */}
            {/* <button onClick={ () => { clearCarrito() } }>Limpiar carrito</button> */}
            {/* {item.stock > 0 && <Link to={'/cart'}> 
                terminar compra
            </Link>} */}
        </>
    )
}

export default ItemDetail;