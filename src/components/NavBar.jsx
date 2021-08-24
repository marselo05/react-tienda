import { Link } from "react-router-dom";
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
				<Link to='/'>
					<p className="navbar-brand">React Sport</p>
				</Link>	
		    	<div className="cont-navbar">
			    	<div className="navbar-toggler" onClick={ clickRealizado }>
			      		<span className="navbar-toggler-icon"></span>
		    		</div>
		    		<div className="navbar-collapse collapse" id="navbar-site">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					        <li className="nav-item">
								<Link to={'/'}>
									<p className="nav-link active">Inicio</p>
								</Link>
					        </li>
					        <li className="nav-item">
								<Link to={'/category/1'}>
									<p className="nav-link">Ropa</p>
								</Link>
					        </li>
					        <li className="nav-item">
								<Link to={'/category/2'}>
					          		<p className="nav-link">Accesorios</p>
								</Link>
					        </li>
					        <li className="nav-item">
					          	<p className="nav-link">Novedades</p>
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