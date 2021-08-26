import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "./ItemCount";


function ItemDetail({item}) 
{
    const [items, setItems] = useState(0)

    return (
        <>
			<p>{item.title}</p>
			<p>{item.price}</p>
			<p>{item.pictureUrl}</p>
			<p>{item.descripcion}</p>
            {/* <button onClick={onAdd} item={item}>Terminar tu compra</button> */}
            <ItemCount onAdd={setItems} items={items} props={item} stockItem={5} />
            {items > 0 && <Link to={'/cart'}> terminar compra</Link>}
        </>
    )
}

export default ItemDetail;