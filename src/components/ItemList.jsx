import { useEffect,  useState} from 'react';
import Item from './Item';

function ItemList() 
{
	const [products, setProducts] = useState([
		{
			id: 1,
			title: 'remera',
			descripcion: 'lorem Ipsum',
			price: '300',
			pictureUrl: '#url1'
		},{
			id: 2,
			title: 'pantalon',
			descripcion: 'lorem Ipsum',
			price: '500',
			pictureUrl: '#url2'
		},
	]);

	useEffect(() => {
		// 
		new Promise( (resolve, reject) => 
		{
			
			setTimeout( () => {
				resolve(products)
			}, 2000)

		})
		.then( (DataResolve) => {

			console.log('DataResolve: ', DataResolve);
			setProducts(DataResolve);
		})
		.catch( (error) => {
			console.log( 'Error: ', error);
		});

	}, [products]);

	return (
		<>
			{products.map( (u, i) => (<Item {...u} key={i} /> )) }
		</>
	)
}
export default ItemList;