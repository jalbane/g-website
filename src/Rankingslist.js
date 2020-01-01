import React from 'react';
import './rankingslist.css';

class Rankingslist extends React.Component{
	render(){	
		return (
			<div className = 'rankings-row'>
				<span className ='rankings-cell'> <h5> {this.props.raidSummary.displayName} </h5> </span>
	    		<span className ='rankings-cell'> {this.props.raidSummary.summary} </span>
	    		<span className ='rankings-cell'> {this.props.raidSummary.realm} </span>
	    		<span className ='rankings-cell'> {this.props.raidSummary.world} </span>
			</div>
		);
	}
}

export default Rankingslist;
