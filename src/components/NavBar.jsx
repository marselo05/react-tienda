import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() 
{
	function clickRealizado() 
	{
		const navbarSite = document.getElementById('navbar-site');
	    	if(navbarSite.classList.value === 'navbar-collapse collapse')
		    	navbarSite.classList.remove('collapse');
		    else
		    	navbarSite.classList.add('collapse');
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  	<div className="container-fluid">
		    	<p className="navbar-brand">React Sport</p>
		    	<div className="cont-navbar">
			    	<div className="navbar-toggler" onClick={ clickRealizado }>
			      		<span className="navbar-toggler-icon"></span>
		    		</div>
		    		<div className="navbar-collapse collapse" id="navbar-site">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					        <li className="nav-item">
					          	<p className="nav-link active">Hombre</p>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Mujer</p>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Niño</p>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Novedades</p>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Marcas</p>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Ofertas</p>
					        </li>
						</ul>
					</div>
					<CartWidget />
				</div>	
		  	</div>
		</nav>
	);
}

export default NavBar;