import Item from './Item';

function ItemList({products}) 
{

	return (
		<>
			{products.map( (u, i) => (<Item {...u} key={i} /> )) }
		</>
	)
}
export default ItemList;