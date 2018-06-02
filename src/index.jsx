import React from 'react';
import ReactDOM from 'react-dom';

import './sassfiles/main_style.scss';

import Header from './components/header/header.jsx';
import DrawerMenu from './components/header/drawer_menu.jsx';

class Page extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<DrawerMenu />
			</div>
		);
	}
}

ReactDOM.render(
  <Page />,
  document.getElementById('page')
);