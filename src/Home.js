import React, {Component} from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';

class Home extends Component{
	render(){
	return(
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="">Home</Link>
						</li>
						<li>
							<Link to="/App">Roster</Link>
						</li>
					</ul>
		        </nav>
		 		<Switch>
			 		<Route path="/Home" component={Home} exact/> 
			 		<Route path="/App" component={App} exact/> 
                </Switch>
	    	</div>
		</BrowserRouter>
    );
	}
}

export default Home;