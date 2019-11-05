import React, {Component} from 'react';
import roster from './roster.css';

class Roster extends Component{
	render(){
		var styles ={
			textAlign: 'center',
			verticalAlign: 'left',
			backgroundColor: 'lightgray',
			display: 'table-cell',
			margin: 'auto',
			width: '25%'
		}
		var container = {
			margin: 'auto',
			width: '30%',
			backgroundColor: 'gray',
			display: 'block',
			border: 'solid 2px black'
		}
	
		var pic = {
			width: '14%',
			height: '82px',
			display: 'table-cell',
			backgroundColor: 'lightgray'
		}
		var link ={
			height: '20px',
			width: '20px'
		}
		return (
			<div className = "container" style = {container}>
				<div className = "row">
					<div className = 'picCell' style = {pic}><a id = "redirect" href = {`https://raider.io/character/us/lightbringer/${this.props.itemList.raider[this.props.itemList.key].character.name}`} target = "_blank" style = {link}><img src = {`https://render-us.worldofwarcraft.com/character/${this.props.itemList.raider[this.props.itemList.key].character.thumbnail}`} alt = "char_thumbnail"/></a></div>
					<div className = 'cell' style = {styles}>{this.props.itemList.raider[this.props.itemList.key].character.name} </div>
					<div className = 'cell' style = {styles}>{this.props.itemList.raider[this.props.itemList.key].character.spec.name} </div>
					<div className = 'cell' style = {styles}>{this.props.itemList.raider[this.props.itemList.key++].character.spec.role} </div>
				</div>
			</div>
			);
	}
}
export default Roster;