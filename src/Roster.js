import React, {Component} from 'react';
import './roster.css'


class Roster extends Component{
	render(){
		console.log(this.props)
		return (
				<div id = "row">
					<span className = 'cell' > 
						<a id = "redirect" href = {`https://raider.io/characters/us/lightbringer/${this.props.name}`} target = "_blank" rel="noopener noreferrer" >
							<img src = {`https://render-us.worldofwarcraft.com/character/${this.props.tnail}`} alt = '' /> 
						</a> 
					</span>
					<span className = 'cell' > {this.props.name}</span>	
					<span className = 'cell' > {this.props.spec}</span>	
					

				

				</div>
			);
	}
}
export default Roster;