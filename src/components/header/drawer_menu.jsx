import React from 'react';
import {
	BrowserRouter as Router,
	Link
} from 'react-router-dom'

export default class DrawerMenu extends React.Component {
	render() {

		var visbility = "";

		if (this.props.menuVisibility) {
			visbility = "show"
		}

		return(
			<div onClick={this.props.handleMouseDown} className={"drawer_menu " + (visbility)}>
				<Router>
					<div>
						<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</Router>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
		)
	}
}