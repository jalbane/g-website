import React, {Component} from 'react';
import {Link, HashRouter, Route} from 'react-router-dom';
import editedApp from './editedApp';
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
  }

	render(){
	return(
		<HashRouter history="browserHistory">	     
      
        <Navbar className = 'main-bar'bg="light" expand="lg" style = {{'min-height': '120px', 'font-size': '24px', 'width': '100%'}}>
          <Navbar.Brand href="" style = {{'font-size': '24px'}}>NFA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><div className = 'selection'><Link to="" style = {{ 'color': 'black', 'textDecoration': 'none'}} >Rankings</Link></div></Nav.Link>   
              <Nav.Link><div className = 'selection'><Link to="editedApp" style = {{'color': 'black', 'textDecoration': 'none'}}>Roster</Link></div></Nav.Link>
              <NavDropdown title="Additional Links" id="basic-nav-dropdown">   
                <NavDropdown.Item href="https://raider.io/guilds/us/lightbringer/NFA" target = "_blank">Raider.io</NavDropdown.Item>
                <NavDropdown.Item href="https://www.wowprogress.com/guild/us/lightbringer/NFA" target = "_blank">Wow progress</NavDropdown.Item>
                <NavDropdown.Item href="https://www.warcraftlogs.com/guild/id/357706" target = "_blank">Warcraft logs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
		    {this.state.load ? (  <Route path = "/" exact component = {Rankings}/> ) : null}
        <Route path = "/editedApp" component = {editedApp}/>

      
		</HashRouter>  
		
    );
	}
}

export default Home;

/*{this.state.rankingsVisit ? null: ( <Route path = "/Rankings.js" component = {Rankings} exact />,  this.setState({homeVisit: false}), this.setState({rankingsVisit: true})) }*/