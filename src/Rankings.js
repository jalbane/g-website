import React from 'react'
import './rankings.css'
import Rankingslist from './Rankingslist'
import * as serviceWorker from './serviceWorker';
import Spinner from 'react-bootstrap/Spinner'

class Rankings extends React.Component{
	constructor(props){
	super(props)
	this.state = {
			loading: true,
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
						fillSummary replaced by fillRankings
			 ------ 	something like this can also be done	---------- 
			this.setState({uldir: 
				{summary:data.raid_progression.uldir.summary, 
				progress:data.raid_progression.uldir.summary
				}
			})
		*/

		response = await fetch('https://raider.io/api/v1/guilds/profile?region=us&realm=lightbringer&name=nfa&fields=raid_rankings')
		let dataRankings = await response.json()

		this.fillRankings('uldir', 'uldir', data, dataRankings, 'Uldir')
		this.fillRankings('bod', 'battle-of-dazaralor', data, dataRankings, 'Battle of Dazar\'alor')
		this.fillRankings('cos', 'crucible-of-storms', data, dataRankings, 'Crucible of Storms')
		this.fillRankings('tep', 'the-eternal-palace', data, dataRankings, 'Eternal Palace')
		this.fillRankings('nwc', 'nyalotha-the-waking-city', data, dataRankings, 'Ny\'alotha, the Waking City')
		this.setState({loading: false})
	}

	fillRankings(name, longName, data, dataRankings, displayName){
		let mythicProg, heroicProg, normalProg;
		mythicProg = data.raid_progression[longName].mythic_bosses_killed;
		heroicProg = data.raid_progression[longName].heroic_bosses_killed;
		normalProg = data.raid_progression[longName].normal_bosses_killed
		if (mythicProg >= 1){
			this.setState( { [name]: 
						{
							displayName: displayName,
							summary: data.raid_progression[longName].summary,
							world: dataRankings.raid_rankings[longName].mythic.world,
							realm: dataRankings.raid_rankings[longName].mythic.realm
						}
					 })
		}
		else if (heroicProg >= 1){
			this.setState( { [name]: 
						{
							displayName: displayName,
							summary: data.raid_progression[longName].summary,
							world: dataRankings.raid_rankings[longName].heroic.world,
							realm: dataRankings.raid_rankings[longName].heroic.realm
						}
					 })
		}
		else if (normalProg >= 1){
			this.setState( { [name]: 
						{
							displayName: displayName,
							summary: data.raid_progression[longName].summary,
							world: dataRankings.raid_rankings[longName].normal.world,
							realm: dataRankings.raid_rankings[longName].normal.realm
						}
					 })
		}
		else {
			this.setState( { [name]: 
						{
							displayName: displayName,
							summary: 'N/A',
							world: 'N/A',
							realm: 'N/A'
						}
					 })
		}
	}

	render(){
	let data = this.state
	return (
			<div>
				{this.state.loading
					? <div className = 'loading-banner-home'> 
			              <h1 style = {{width: '100%', marginLeft: '45%'}}>Loading &nbsp;
			                <Spinner style = {{marginBottom: 5, fontSize: 12}} size = 'md' animation="border" role="status"></Spinner>
			              </h1>
			            </div>
			        : <div className = 'rankings-page'>
			        	<div className = 'title-cell'> <h4> No Fun Allowed - Lightbringer (US) </h4> </div>
						<div className = 'rankings-container'>
							<div className = 'rankings-row'>
								<span className ='rankings-cell'> <h4> Raid Name </h4></span>
				    			<span className ='rankings-cell'> <h4> Progress </h4> </span>
				    			<span className ='rankings-cell'> <h4> Realm Ranking </h4> </span>
				    			<span className ='rankings-cell'> <h4> World Ranking </h4> </span>
			    			</div>
				    		<Rankingslist raidSummary = {data.uldir} />
				    		<Rankingslist raidSummary = {data.bod} />
				    		<Rankingslist raidSummary = {data.cos} />
				    		<Rankingslist raidSummary = {data.tep} />
				    		<Rankingslist raidSummary = {data.nwc} />
						</div>
					  </div>
			    }
			</div>	
	
		);
	}
}

export default Rankings;
serviceWorker.register();