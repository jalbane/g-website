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
			roleHandler = this.props.spec.role
			if (this.props.spec.role === 'HEALING')
				roleHandler = 'Healer'
			else if (this.props.spec.role === 'DPS')
				roleHandler = 'Damage'
			else 
				roleHandler = 'Tank'
		} 
		catch (error){
			if (error instanceof TypeError)
				roleHandler = 'Error'
		}
		return (
				<div className = 'character-container'>
					<span > 
						<a id = "redirect" href = {`https://raider.io/characters/us/lightbringer/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
							<img src = {`https://render-us.worldofwarcraft.com/character/${this.props.tnail}`} alt = '' /> 
						</a> 
					</span>
					<span > <strong> {this.props.name} </strong> </span>
					<span > {Specialization}</span>	
					<span > {roleHandler}</span>
				</div>
			);
	}
}
export default Roster;