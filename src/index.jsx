import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

import './sassfiles/main_style.scss';

import Header from './components/header/header.jsx';
import DrawerMenu from './components/header/drawer_menu.jsx';

/* pages */
import Home from './components/page/home.jsx';
import About from './components/page/about.jsx';

class Page extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState(prevState => ({
			visible: !this.state.visible
		}));
	}

	handleMouseDown(e) {
		e.preventDefault();
		this.toggleMenu();
	}

	render() {
		return (
			<div className={this.state.visible ? "overlay" : ""} onClick={this.handleMouseDown}>
				<Header handleMouseDown={this.handleMouseDown} />
				<DrawerMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
			</div>
		);
	}
}

ReactDOM.render(
  <Page />,
  document.getElementById('page')
);