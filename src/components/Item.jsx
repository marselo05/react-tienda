import { Link } from "react-router-dom";
// Style CSS
const itemStyle = {width: '300px', padding: '.5rem', border: '1px solid'}

function Item(props) 
{
	return (
		<>
			<div style={itemStyle}>
				<p>{props.title}</p>
				<p>{props.descripcion}</p>
				<p>{props.price}</p>
				<p>{props.pictureUrl}</p>
			</div>
			<Link to={`/item/${props.id}`} >
				ver +
			</Link>
		</>
	)
}
export default Item;