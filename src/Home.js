import React, {Component} from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Rankings from './Rankings'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-152946505-1')
ReactGA.pageview(window.location.pathname + window.location.search)

class Home extends Component{
	render(){
  	return(
  		<HashRouter history="browserHistory">	     
        <Navbar className = 'main-bar'bg="light" expand="lg" style = {{'textAlign': 'center', 'minHeight': '120px', 'fontSize': '24px', 'width': '100%', 'boxShadow': '0px 1px 5px'}}>
            <Navbar.Brand style = {{'fontSize': '24px'}}>No Skill</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center" defaultActiveKey = "/">
                <NavLink to="/" ><Button style = {{'fontSize': '24px', margin: 15, marginTop: 22}} variant = 'outline-dark' size = 'md'> Rankings  </Button></NavLink>   
                <NavLink to="/Roster"><Button style = {{'fontSize': '24px', margin: 15, marginTop: 22}}variant = 'outline-dark' size = 'md'> Roster  </Button></NavLink>
                <NavDropdown style = {{marginTop: 22}} title="Additional Links">   
                  <NavDropdown.Item href="https://raider.io/guilds/us/sargeras/No%20Skill" target = "_blank">Raider.io</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.wowprogress.com/guild/us/sargeras/No%20Skill" target = "_blank">Wow progress</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.warcraftlogs.com/guild/us/sargeras/no%20skill" target = "_blank">Warcraft logs</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path = "/"  component = {Rankings}/> 
          <Route path = "/Roster" component = {App}/>
  		</HashRouter>  
    );
	}
}

export default Home;