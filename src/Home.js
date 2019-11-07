import React, {Component} from 'react';
import {Link, HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Rankings from './Rankings'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			bod: {

			}
		
			,
			uldir: {
				
			}
			
			,
			cos: {}
	
			,
			tep: {}

			
		}
	}

	async componentDidMount(){
		let response= await fetch('https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression')
		let data = await response.json()
		this.setState({uldir: data.raid_progression.uldir})
		this.setState({bod: data.raid_progression["battle-of-dazaralor"]})
		console.log(this.state)
		/*this.setState({uldir: data})
		
		this.state.uldir.summary = data.raid_progression.uldir.summary
		this.state.bod.summary = data.raid_progression["battle-of-dazaralor"].summary
		this.state.cos.summary = data.raid_progression["crucible-of-storms"].summary
		this.state.tep.summary = data.raid_progression["the-eternal-palace"].summary
		response = await fetch('https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_rankings')
		data = await response.json()
		this.state.uldir.world = data.raid_rankings.uldir.mythic.world
		this.state.uldir.realm = data.raid_rankings.uldir.mythic.realm
		this.state.bod.realm = data.raid_rankings["battle-of-dazaralor"].mythic.realm
		this.state.bod.world = data.raid_rankings["battle-of-dazaralor"].mythic.world
		this.state.cos.realm = data.raid_rankings["crucible-of-storms"].mythic.realm
		this.state.cos.world = data.raid_rankings["crucible-of-storms"].mythic.world
		this.state.tep.realm = data.raid_rankings["the-eternal-palace"].mythic.realm
		this.state.tep.world = data.raid_rankings["the-eternal-palace"].mythic.world
	*/}
	render(){
	let item
	item = this.state
	return(
		
		<HashRouter>
			<Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Home"><Link to="">Home</Link></Nav.Link>
              <Nav.Link href="Roster.js"><Link to="/App">Roster</Link></Nav.Link>
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
			 		<Route path="/Home" component={Home} exact/> 
			 		<Route path="/App" component={App} exact/> 
                </Switch>
                <Rankings data = {item} />
		</HashRouter>
    );
	}
}

export default Home;