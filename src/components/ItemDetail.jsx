
function ItemDetail({item}) 
{
    return (
        <>
			<p>{item.title}</p>
			<p>{item.price}</p>
			<p>{item.pictureUrl}</p>
			<p>{item.descripcion}</p>
        </>
    )
}

export default ItemDetail;