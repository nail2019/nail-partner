import React, { Component } from 'react';


import './service.css'

import Menu from './menu';
import Content from './content'
import { Container } from 'react-bootstrap';


class ServicePage extends Component {
	state = {
		ListService : [
			'Trọn gói cho tay và chân',
			'Chăm sóc móng tay hoặc chân',
			'Đắp bột',
			'Đắp móng gel',
			'Vẽ trang trí',
			'Đính đá'
		],
		
	}
	render() {
		let {ListService} = this.state;
		return (
			<Container>
			<div id="main-service">
				<Menu data = {ListService}/>
				<Content />
			</div>
			</Container>
		);
	}
}

export default ServicePage;