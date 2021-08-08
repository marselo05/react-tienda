import React from 'react';
import ItemList from './ItemList'

class ItemListContainer extends React.Component {

	state = {
		greeting: 'hola'
	};

	render() 
	{
		return (
			<ItemList />
		); 
	}
			// <h3>
			// 	{this.state.greeting}
			// </h3>

}

export default ItemListContainer;