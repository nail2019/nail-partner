import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './notfound.css';
import Logo from './logo.svg';

class NotfoundPage extends Component {
    render() {
      return (
        <div className="notfoundPage">
			<Container>
				<Row className="mt-3">
					<Col md={4}></Col>
					<Col md={4}>
						<div className="logo">
							<img src={Logo} alt='logo' />
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={1}></Col>
					<Col md={10}className="notfound404">
						404
					</Col>
				</Row>
				<Row>
					<Col md={2}></Col>
					<Col md={8}>
						<div className="requestNotfound">
							Rất tiếc! Yêu cầu của bạn không được tìm thấy!
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}></Col>
					<Col md={4} className="mt-5 mb-5">
            <Link to={'/'}><button type="button" className="btn btn-primary backHomeButton">VỀ TRANG CHỦ</button></Link>    
					</Col>
				</Row>
			</Container>
		</div>
      );
    }
  }
  
  export default NotfoundPage;