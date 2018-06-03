import React from 'react';
import { 
	TiThMenu,
	TiHeartFullOutline
} from 'react-icons/lib/ti';
import {
	FaPhone
} from 'react-icons/lib/fa';
import {
	GoThreeBars
} from 'react-icons/lib/go';

import Logo from '../../images/elite-cars-logo.png';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="menu">
					<div className="menu_button">
						<a href="" onClick={this.props.handleMouseDown}><GoThreeBars /></a>
					</div>
					<div className="logo">
						<a href=""><img src={Logo} /></a>
					</div>
					<div className="menus">
						<a href=""><TiHeartFullOutline /></a>
						<a href=""><FaPhone /></a>
					</div>
				</div>
			</header>
		);
	}
}