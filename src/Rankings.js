import React from 'react'

class Rankings extends React.Component{
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
	let data = this.state
	return (
		
			<div>
	    		 {data.uldir.summary} <br />
	    		 asdfasdf <br />
	    		 <br />
			</div>
		);
	}
}

export default Rankings;