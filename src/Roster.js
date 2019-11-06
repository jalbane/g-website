import React, {Component} from 'react';


class Roster extends Component{
	render(){
		let index = this.props.itemList.key
		let spec 
		if (this.props.itemList.raider[index].character.spec.role === 'TANK')
			spec = 'Tank'		
		else if (this.props.itemList.raider[index].character.spec.role === 'HEALING')
			spec = 'Healer'
		else if (this.props.itemList.raider[index].character.spec.role === 'DPS')
			spec = 'Dps'
		this.props.itemList.key++

		return (
				<div className = "row">
					<span className = 'cell' ><a id = "redirect" href = {`https://raider.io/character/us/lightbringer/${this.props.itemList.raider[index].character.name}`} target = "_blank" ><img src = {`https://render-us.worldofwarcraft.com/character/${this.props.itemList.raider[index].character.thumbnail}`} alt = "char_thumbnail"/></a></span>
					<span className = 'cell' >{this.props.itemList.raider[index].character.name} </span>
					<span className = 'cell' >{this.props.itemList.raider[index].character.spec.name} </span>
					<span className = 'cell' >{spec} </span>
				</div>
			);
	}
}
export default Roster;