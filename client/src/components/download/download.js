import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './download.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import img1 from '../../assets/images/appstore.svg';
// import img2 from '../../assets/images/chplay.svg';

export default function DownloadApp() {

  return (
    <div className="background-main mb-5">
      <Container>
        <Row><div className='download-title'>Tải ứng dụng tại đây</div></Row>
        <Row>
          <Col sm={3} md={3} sx={3}>

          </Col>
          <Col sm={3} md={3} sx={3}>
            <div className='download-mobile'></div>
          </Col>
          <Col sm={3} md={3} sx={3}>
            <Row><div className='download-chplay'></div></Row>
            <Row><div className='download-appstore'></div></Row>
            <Row><div className='download-qrcode'></div></Row>
          </Col>
          <Col sm={3} md={3} sx={3}>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
