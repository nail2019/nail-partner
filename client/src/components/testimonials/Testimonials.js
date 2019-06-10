import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './testimonials.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import img1 from '../../assets/images/appstore.svg';
// import img2 from '../../assets/images/chplay.svg';
import Testimonials1 from './Testimonials1'
import Testimonials2 from './Testimonials2'

export default function Testimonials() {

    return (
        <Container className='mt-5'>
            <Row><div className='useapp-title'>Nhận xét của mọi người</div></Row>

            <Row className='testimonial-row mb-5'>
                <Col sm={4}><Testimonials1 /></Col>
                <Col sm={4}><Testimonials2 /></Col>
                <Col sm={4}><Testimonials1 /></Col>
            </Row>
        </Container>
    )
}
