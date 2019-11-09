import React, {Component} from 'react';
import {Link, HashRouter, Route} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Rankings from './Rankings'
import './home.css'

class Home extends Component{
  constructor(props){
    super(props)
      this.state = {
        load: true
      };
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    return <Route path = "/App" exact component = {App} />
  }

	render(){
  let loadApp = this.state.load
	return(
		<HashRouter>	     

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="">Rankings</Link></Nav.Link>
              <Nav.Link><Link to="App" className = "disabled-link">Roster</Link></Nav.Link>
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
		    {this.state.load ? (  <Route path = "/" exact component = {Rankings}/> ) : null}
        <Route path = "/App" component = {App}/>

      
		</HashRouter>  
		
    );
	}
}

export default Home;

/*{this.state.rankingsVisit ? null: ( <Route path = "/Rankings.js" component = {Rankings} exact />,  this.setState({homeVisit: false}), this.setState({rankingsVisit: true})) }*/