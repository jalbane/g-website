import React, {Component} from 'react';
import './roster.css'

class Roster extends Component{
  constructor(props){
    super(props)
    this.state = {
    	image: []
    };
  }

	render(){
		let roleImgSrc
		//let Specialization
		/*
		
		******** Player specialization and role have been removed from the API.
				 My original design/template no longer displays correctly
		try {
			Specialization = (this.props.spec)
		} 
		catch (error){
			if (error instanceof TypeError)
				Specialization = 'Error'
		}	
		*/
		
		try {
			if (this.props.spec.role === 'HEALING')
				roleImgSrc = 1
			else if (this.props.spec.role === 'DPS')
				roleImgSrc = 2
			else
				roleImgSrc = 3
		} 
		catch (error){
			if (error instanceof TypeError)
				roleImgSrc = null
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
			case 13:
				characterClass = ''
				break
			default:
				characterClass = 'Error'		
		}
		//let insetImg = this.props.tnail.replace('-avatar', '-inset')
		if (this.props.loading){
			return (
				<div className = 'shimmerLoad'>
						<div className = 'character-container'>
						<div className = 'img-container'> 
							{//<a id = "redirect" href = {`https://raider.io/characters/us/sargeras/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
								<div className = "img-span">  </div> 
							//<a>
							} 
						</div>
						<span className = "text-span"> <strong> {this.props.name} </strong> </span>
						{/*<span > Specialization</span>	*/}
						<span className = "text-span"> {characterClass}</span>
						{ roleImgSrc === 1 
							? <div className = 'Healer'></div>
							: roleImgSrc === 2
							? <div className = 'Dps'></div> 
							:roleImgSrc === 3
							? <div className = 'Tank'></div>
							: null
							?roleImgSrc === null
							: <div ></div>
						}
					</div>
				</div>
			)
		}
		return (
				<div className = 'character-container'>
					<div className = 'img-container'> 
						{<a id = "redirect" href = {`https://raider.io/characters/us/sargeras/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
							<img alt = "error" src = {this.props.tnail} />
						</a>
					} 
					</div>
					<span > <strong> {this.props.name} </strong> </span>
					{/*<span > {Specialization}</span>*/	}
					<span > {characterClass}</span>
					{ roleImgSrc === 1 
						? <div className = 'Healer'></div>
						: roleImgSrc === 2
						? <div className = 'Dps'></div> 
						:roleImgSrc === 3
						? <div className = 'Tank'></div>
						: null
						?roleImgSrc === null
						: <div ></div>
					}
				</div>
			);
	}
}
export default Roster;