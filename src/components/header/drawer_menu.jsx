import React from 'react';

export default class DrawerMenu extends React.Component {
	render() {

		var visbility = "";

		if (this.props.menuVisibility) {
			visbility = "show"
		}

		return(
			<div onClick={this.props.handleMouseDown} className={"drawer_menu " + (visbility)}>

			</div>
		)
	}
}