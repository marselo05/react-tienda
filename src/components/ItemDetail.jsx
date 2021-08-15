import {useEffect, useState} from 'react';

function ItemDetail() 
{
    const [items, setItmes] = useState([
		{
			id: 1,
			titulo: 'remera',
			descripcion: 'lorem Ipsum',
			precio: '300',
			imagen: '#url1'
		},{
			id: 2,
			titulo: 'pantalon',
			descripcion: 'lorem Ipsum',
			precio: '500',
			imagen: '#url2'
		},
	]);

    const getItems = async () => {

        new Promise( (resolve, reject) => 
		{
			
			setTimeout( () => {
				resolve(items)
			}, 2000)

		})
		.then( (DataResolve) => {

			console.log('DataResolve: ', DataResolve);
			setItmes(DataResolve);
		})
		.catch( (error) => {
			console.log( 'Error: ', error);
		});

    };

    useEffect(() => {
		
        getItems();

	}, []);

    return (
        <>
            {
                items.map( (u, i) => (
                <div key={i}>
                    <p>{u.titulo}</p>
                    <p>{u.precio}</p>
                    <p>{u.imagen}</p>
                    <p>{u.descripcion}</p>
                </div>
                ))
            }
        </>
    )
}

export default ItemDetail;