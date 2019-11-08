import React, {Component} from 'react';
import {Link, HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Rankings from './Rankings'


class Home extends Component{

	render(){
	return(
		<div style = {{}}>
		<HashRouter>	<Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="">Home</Link></Nav.Link>
              <Nav.Link><Link to="Rankings.js">Rankings</Link></Nav.Link>
              <Nav.Link><Link to="App.js">Roster</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
		 		<Switch>
			 		<Route path = "/Rankings.js" component = {Rankings} exact />
			 		<Route path="/App.js" component={App} exact/> 
                </Switch>
		</HashRouter>  
		</div>
    );
	}
}

export default Home;