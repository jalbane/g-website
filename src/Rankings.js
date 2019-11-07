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
		this.fillSummary('uldir', data, 'uldir')
		/*********		Replaced by function fillSummary 	***********
			 ------ 	something like this can also be done	---------- 
			this.setState({uldir: 
				{summary:data.raid_progression.uldir.summary, 
				progress:data.raid_progression.uldir.summary
				}
			})
		*/
		this.fillSummary('bod', data, 'battle-of-dazaralor')
	}

	fillSummary(name, data, longName){
		this.setState( {[ name]: 
						{
							summary:data.raid_progression[longName].summary
						}
					 })
		console.log(this.state)
	}

	render(){
	let data = this.state
	return (

			<div>
	    	
			</div>
		);
	}
}

export default Rankings;