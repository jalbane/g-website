import React, {Component} from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import App from './App';

class Home extends Component{
	render(){
	return(
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/roster">Roster</Link>
						</li>
					</ul>
		        </nav>
		 		<Route
		 			path="/"
                    component={Home}
                    /> 
	    	</div>
		</BrowserRouter>
    );
	}
}

export default Home;