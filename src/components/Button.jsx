import React from 'react';

function Button(props) {
	return(
		<button onClick={ () => { props.eventoClick() } }>
			{props.text}
		</button>
	)
}

export default Button;