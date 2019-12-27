import React, {Component} from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import editedApp from './editedApp';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Rankings from './Rankings'
import './home.css'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-152946505-1')
ReactGA.pageview(window.location.pathname + window.location.search)
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
      <Navbar className = 'main-bar'bg="light" expand="lg" style = {{'minHeight': '120px', 'fontSize': '24px', 'width': '100%'}}>
          <Navbar.Brand style = {{'margin': 15, 'fontSize': '24px'}}>NFA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" activeStyle={{'textDecoration': 'none'}}><div className = 'selection'>Rankings</div></NavLink>   
              <NavLink to="/editedApp" activeStyle={{'textDecoration': 'none'}}><div className = 'selection'>Roster</div></NavLink>
              <NavDropdown style = {{'margin': 15,}} title="Additional Links" id="basic-nav-dropdown">   
                <NavDropdown.Item href="https://raider.io/guilds/us/lightbringer/NFA" target = "_blank">Raider.io</NavDropdown.Item>
                <NavDropdown.Item href="https://www.wowprogress.com/guild/us/lightbringer/NFA" target = "_blank">Wow progress</NavDropdown.Item>
                <NavDropdown.Item href="https://www.warcraftlogs.com/guild/id/357706" target = "_blank">Warcraft logs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path = "/"  component = {Rankings}/> 
        <Route exact path = "/editedApp" component = {editedApp}/>
		</HashRouter>  
  );
	}
}

export default Home;