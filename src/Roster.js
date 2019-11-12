import React, {Component} from 'react';
import './roster.css'


class Roster extends Component{
	render(){

		let Specialization
		let roleHandler
		try {
			Specialization = (this.props.spec.name)
		} 
		catch (error){
			if (error instanceof TypeError)
				  Specialization = `Error`
		}	

		try {
			roleHandler = (this.props.spec.role)
		} 
		catch (error){
			if (error instanceof TypeError)
				roleHandler = 'garbage'
		}
		return (
				<div id = "row">
					<span className = 'cell' > 
						<a id = "redirect" href = {`https://raider.io/characters/us/lightbringer/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
							<img src = {`https://render-us.worldofwarcraft.com/character/${this.props.tnail}`} alt = '' /> 
						</a> 
					</span>
					<span className = 'cell' > {this.props.name}</span>
					<span className = 'cell' > {Specialization}</span>	
					<span className = 'cell' > {roleHandler}</span>
	
						
					

				

				</div>
			);
	}
}
export default Roster;