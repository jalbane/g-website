import React, {Component} from 'react';
import './roster.css'

class Roster extends Component{
	render(){
		let Specialization
		let roleImgSrc
		try {
			Specialization = (this.props.spec.name)
		} 
		catch (error){
			if (error instanceof TypeError)
				  Specialization = `Error`
		}	

		try {
			roleImgSrc = null
			if (this.props.spec.role === 'HEALING')
				roleImgSrc = 1
			else if (this.props.spec.role === 'DPS')
				roleImgSrc = 2
			else 
				roleImgSrc = 3
		} 
		catch (error){
			if (error instanceof TypeError)
				roleImgSrc = 'error'
		}
		let characterClass
		switch(this.props.class){
			case 1:
				characterClass = 'Warrior'
				break
			case 2: 
				characterClass = 'Paladin'
				break
			case 3:
				characterClass = 'Hunter'
				break
			case 4:
				characterClass = 'Rogue'
				break
			case 5:
				characterClass = 'Priest'
				break
			case 6:
				characterClass = 'Death Knight'
				break
			case 7:
				characterClass = 'Shaman'
				break
			case 8:
				characterClass = 'Mage'
				break
			case 9:
				characterClass = 'Warlock'
				break
			case 10:
				characterClass = 'Monk'
				break	
			case 11:
				characterClass = 'Druid'
				break
			case 12:
				characterClass = 'Demon Hunter'
				break
			default:
				characterClass = 'Error'		
		}

		return (
				<div className = 'character-container'>
					<div className = 'img-container'> 
						<a id = "redirect" href = {`https://raider.io/characters/us/lightbringer/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
							<img className = 'character-img' src = {`https://render-us.worldofwarcraft.com/character/${this.props.tnail}`} alt = '' /> 
						</a> 
					</div>
					<span > <strong> {this.props.name} </strong> </span>
					<span > {Specialization}</span>	
					<span > {characterClass}</span>
					{roleImgSrc === 1 ? <div className = 'Healer'>  </div>: roleImgSrc === 2? <div className = 'Dps'> </div> :roleImgSrc === 3? <div className = 'Tank'> </div>: null}
				</div>
			);
	}
}
export default Roster;