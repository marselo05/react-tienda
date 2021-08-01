import React from 'react';

class ItemListContainer extends React.Component {

	state = {
		greeting: 'hola'
	};

	render() 
	{
		return (
			<h3>
				{this.state.greeting}
			</h3>
		); 
	}

}

export default ItemListContainer;