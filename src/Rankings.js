import React from 'react'
import './rankings.css'
import Rankingslist from './Rankingslist'

class Rankings extends React.Component{
	constructor(props){
	super(props)
	this.state = {
			bod: {

			},
			uldir: {

			},
			cos: {

			},
			tep: {

			}
		}
	}

	async componentDidMount(){
		let response= await fetch('https://raider.io/api/v1/guilds/profile?region=US&realm=Lightbringer&name=NFA&fields=raid_progression')
		let data = await response.json()
	
		/*********		Replaced by function fillSummary 	***********
			 ------ 	something like this can also be done	---------- 
			this.setState({uldir: 
				{summary:data.raid_progression.uldir.summary, 
				progress:data.raid_progression.uldir.summary
				}
			})
		*/

		response = await fetch('https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings')
		let dataRankings = await response.json()

		this.fillRankings('uldir', 'uldir', data, dataRankings)
		this.fillRankings('bod', 'battle-of-dazaralor', data, dataRankings)
		this.fillRankings('cos', 'crucible-of-storms', data, dataRankings)
		this.fillRankings('tep', 'the-eternal-palace', data, dataRankings)
	}

	fillRankings(name, longName, data, dataRankings){
		if (name === 'cos'){
			this.setState( { [name]: 
						{
							summary: data.raid_progression[longName].summary,
							world: dataRankings.raid_rankings[longName].heroic.world,
							realm: dataRankings.raid_rankings[longName].heroic.realm
						}
					 })
		}
		else{
		this.setState( { [name]: 
						{
							summary: data.raid_progression[longName].summary,
							world: dataRankings.raid_rankings[longName].mythic.world,
							realm: dataRankings.raid_rankings[longName].mythic.realm
						}
					 })
		}
	}

	render(){
	let data = this.state
	return (
			<div className = 'rankings-container'>
	    		<Rankingslist raidSummary = {data.uldir} />
	    		<Rankingslist raidSummary = {data.bod} />
	    		<Rankingslist raidSummary = {data.cos} />
	    		<Rankingslist raidSummary = {data.tep} />
			</div>
		);
	}
}

export default Rankings;