// Style CSS
const itemStyle = {width: '300px', padding: '.5rem', border: '1px solid'}

function Item({id, title, price, pictureUrl}) 
{
	return (
		<>
			<div style={itemStyle}>
				<p>{title}</p>
				<p>{title}</p>
				<p>{price}</p>
				<p>{pictureUrl}</p>
			</div>
		</>
	)
}
export default Item;